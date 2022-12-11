/* Amplify Params - DO NOT EDIT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIENDPOINTOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIIDOUTPUT
	API_MEALPLANNERAPPNEXT_GRAPHQLAPIKEYOUTPUT
	AUTH_MEALPLANNERAPPNEXTE5F263B2_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return "Success!";
};
