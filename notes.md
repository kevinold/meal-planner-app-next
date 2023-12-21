## 2023-08-18

- Refactored PostConfirmation lambda files so that index.mjs has all the code.
- Added test:generateSeedUsers script

I want to test the PostConfirmation Lambda, but it requires signup via the web, then capture of the Time-based One-Time Password (TOTP) so I'm not sure how that's going to work.

What are my options?

- Test the Post Confirmation Lambda async/unit?
- End to end test of signup and verify that the group code displays somewhere on a page for the customer

Can I trigger the Post Confirmation Lambda using the Cognito Admin API?
If so, I could programmatically create the user and the Post Confirmation Lambda will be invoked.
Per [AdminConfirmSignUp - Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html)

> If your user pool configuration includes triggers, the AdminConfirmSignUp API action invokes the AWS Lambda function that is specified for the post confirmation trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. In this payload, the clientMetadata attribute provides the data that you assigned to the ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in Lambda, you can process the ClientMetadata value to enhance your workflow for your specific needs.

```
// PostConfirmation Lambda Event
{
    "version": "1",
    "region": "us-east-2",
    "userPoolId": "us-east-2_1ZCIFSleu",
    "userName": "ff0a631f-26cf-4d6b-9f18-a0f5247b7deb",
    "callerContext": {
        "awsSdkVersion": "aws-sdk-unknown-unknown",
        "clientId": "6qpf4o9jsqi3jreci1dralabin"
    },
    "triggerSource": "PostConfirmation_ConfirmSignUp",
    "request": {
        "userAttributes": {
            "sub": "ff0a631f-26cf-4d6b-9f18-a0f5247b7deb",
            "email_verified": "true",
            "cognito:user_status": "CONFIRMED",
            "cognito:email_alias": "kevinold+third@gmail.com",
            "email": "kevinold+third@gmail.com"
        }
    },
    "response": {}
}
```
