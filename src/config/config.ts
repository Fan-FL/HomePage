export default {
    cognito: {
        Auth: {
            // REQUIRED - Amazon Cognito Region
            region: 'ap-southeast-2',

            // OPTIONAL - Amazon Cognito User Pool ID
            userPoolId: 'ap-southeast-2_EjtQVF9Ch',

            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolWebClientId: '1g9hqde1cf82d58d792encc50g',
            identityPoolId:
                'ap-southeast-2:79d0b2cc-77ca-42f5-a2e7-0444c1dca720',
        },
        API: {
            endpoints: [
                {
                    name: 'testLambda-api',
                    endpoint:
                        'https://1hffh1l7y5.execute-api.ap-southeast-2.amazonaws.com/default',
                    // service: 'lambda',
                    // region: 'ap-southeast-2',
                },
            ],
        },
    },
};
