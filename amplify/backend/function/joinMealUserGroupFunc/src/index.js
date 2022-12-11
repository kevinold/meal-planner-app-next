/* Amplify Params - DO NOT EDIT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIENDPOINTOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIIDOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIKEYOUTPUT
	AUTH_MEALPLANNERAPPNEXTE5F263B2_USERPOOLID
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

const mealUserGroupByInviteCode = /* GraphQL */ `
  query MealUserGroupByInviteCode($inviteCode: String = "") {
    mealUserGroupByInviteCode(inviteCode: $inviteCode) {
      items {
        id
      }
    }
  }
`;

const updateMealUserGroup = /* GraphQL */ `
  mutation UpdateMealUserGroup(
    $input: UpdateMealUserGroupInput!
    $condition: ModelMealUserGroupConditionInput
  ) {
    updateMealUserGroup(input: $input, condition: $condition) {
      id
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const { userId, inviteCode } = event.arguments.input;

  let userGroup;
  let userGroupId;

  try {
    const res = await API.graphql({
      query: mealUserGroupByInviteCode,
      variables: { inviteCode },
    });

    userGroup = res.data.mealUserGroupByInviteCode?.items[0];

    // verify there isn't a member in the group
    if (!userGroup.members) {
      userGroupId = userGroup.id;
    }
  } catch (error) {
    console.log(error);
    throw new Error(JSON.stringify(error, null, 2));
  }

  if (!userGroupId) return "Invalid Invite Code or group is full";

  try {
    const res = await API.graphql({
      query: updateMealUserGroup,
      variables: { input: { id: userGroupId, members: userId } },
    });

    return { statusCode: 200, body: "Success" };
  } catch (error) {
    console.log(error);
    throw new Error(JSON.stringify(error, null, 2));
  }
};
