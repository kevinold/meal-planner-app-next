import { API } from "@aws-amplify/api";
import uuid from "uuid";
const uuidv4 = uuid.v4;

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
const createMealUserGroupMutation = `
  mutation CreateMealUserGroup(
    $input: CreateMealUserGroupInput!
    $condition: ModelMealUserGroupConditionInput
  ) {
    createMealUserGroup(input: $input, condition: $condition) {
      id
    }
  }
`;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`context: ${JSON.stringify(context)}`);
  try {
    const result = await API.graphql({
      query: createMealUserGroupMutation,
      variables: {
        input: {
          owners: event.request.userAttributes.sub,
          inviteCode: uuidv4(),
        },
      },
    });
    console.log("result", result);
  } catch (error) {
    console.log(error);
    throw new Error(JSON.stringify(error, null, 2));
  }
  return event;
};
