// https://docs.amplify.aws/guides/functions/graphql-from-lambda/q/platform/js/)
// https://docs.amplify.aws/guides/functions/graphql-from-lambda/q/platform/js/#iam-authorization

const { Sha256 } = require("@aws-crypto/sha256-js");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { SignatureV4 } = require("@aws-sdk/signature-v4");
const { HttpRequest } = require("@aws-sdk/protocol-http");
const { default: fetch, Request } = require("node-fetch");

const GRAPHQL_ENDPOINT =
  process.env.API_MEALPLANNERAPPNEXT_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-2";

const query = `query MealUserGroupByOwner
 ($owner: String = "") {
   mealUserGroupByOwner(owner: $owner) {
    items {
      id
    }
  }
}`;

/**
 *
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
exports.handler = async (event) => {
  // get the user ID (Cognito sub)
  const userSub = event.request.userAttributes.sub;

  // get the user groups assigned through Cognito groups
  const groups = []; //event.request.groupConfiguration.groupsToOverride;
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: "appsync",
    sha256: Sha256,
  });

  const requestToBeSigned = new HttpRequest({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: endpoint.host,
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query, variables: { owner: userSub } }),
    path: endpoint.pathname,
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
  }

  console.log("data", body);

  // body...
  // Return if no user is found in DB, handle this case
  if (!body.data.mealUserGroupByOwner) return event;

  console.log("data", body.data.mealUserGroupByOwner);

  let groupId;
  if (body.data.mealUserGroupByOwner.items) {
    groupId = body.data.mealUserGroupByOwner.items[0].id;
  }
  const claimsToAddOrOverride = {
    mealUserGroup: groupId,
  };
  const customGroups = [groupId];

  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride: [...groups, ...customGroups],
      },
      claimsToAddOrOverride,
    },
  };

  return event;
};
