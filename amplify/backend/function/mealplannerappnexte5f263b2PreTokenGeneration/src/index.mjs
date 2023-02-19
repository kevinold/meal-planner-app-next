/* Amplify Params - DO NOT EDIT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIENDPOINTOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIIDOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { API } from "@aws-amplify/api";

const config = {
  aws_project_region: process.env.REGION,
  // @ts-ignore
  aws_appsync_graphqlEndpoint:
    process.env.API_MEALPLANNERAPPNEXT_GRAPHQLAPIENDPOINTOUTPUT,
  aws_appsync_region: process.env.REGION,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.API_MEALPLANNERAPPNEXT_GRAPHQLAPIKEYOUTPUT,
};

API.configure(config);

const getMealUserGroupIdQuery = `query GetMealUserGroupId($owner: String = "") {
  listMealUserGroups(filter: {owners: {contains: $owner}}) {
    items {
      id
    }
  }
}`;

/**
 * @type {import('@types/aws-lambda').PreTokenGenerationTriggerHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const claimsToAddOrOverride = {};
  const customGroups = [];

  // get the user ID (Cognito sub)
  const userSub = event.request.userAttributes.sub;

  // get the user groups assigned through Cognito groups
  const groups = event.request.groupConfiguration.groupsToOverride;

  // Return early if user is admin, will have full auth access anyway
  if (groups.includes("admin")) {
    return event;
  }

  let ownerGroup;
  let joinedGroup;

  try {
    const res = await API.graphql({
      query: getMealUserGroupIdQuery,
      variables: { owner: userSub },
    });

    if (
      res.data.listMealUserGroups?.items &&
      res.data.listMealUserGroups.items[0]
    ) {
      res.data.listMealUserGroups?.items.forEach((item) => {
        if (item.owners.length === 1) {
          ownerGroup = item.id;
        }
        // determine the group the user joined by finding the group with multiple users
        if (item.owners.length === 2) {
          joinedGroup = item.id;
        }
      });

      claimsToAddOrOverride.mealUserGroup = joinedGroup || ownerGroup;
    }
  } catch (error) {
    console.log(error);
    throw new Error(JSON.stringify(error, null, 2));
  }

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
