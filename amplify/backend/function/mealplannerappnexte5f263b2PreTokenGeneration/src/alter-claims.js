/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */

const GRAPHQL_ENDPOINT =
  "https://zifdywnwyzcdxlz5ze7ytkwq5q.appsync-api.us-east-2.amazonaws.com/graphql";
const AWS_REGION = process.env.AWS_REGION || "us-east-2";

const query = `query GetUser(
  $id: ID!
) {
  getUser(id: $id) {
    role
    business {
      id
      locations(limit: 100) {
        items {
          id
        }
      }
    }
  }
}`;

export async function handler(event) {
  // get the user ID (Cognito sub)
  const userSub = event.request.userAttributes.sub;

  // get the user groups assigned through Cognito groups
  const groups = event.request.groupConfiguration.groupsToOverride;

  // Return early if user is admin, will have full auth access anyway
  if (groups.includes("admin")) {
    return event;
  }

  // API.graphql

  const claimsToAddOrOverride = {};
  const customGroups = [];

  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        groupsToOverride: [...groups, ...customGroups],
      },
      claimsToAddOrOverride,
    },
  };

  return event;
}
