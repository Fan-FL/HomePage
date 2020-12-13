import React, { useState, useEffect } from 'react';
import Amplify, { Auth, API } from 'aws-amplify';
import aws4 from 'aws4';
import aws from 'aws-sdk';

function Test() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    useEffect(() => {
        onLoad();
    }, []);
    const username = 'funlee1314@gmail.com';
    const password = 'qqq123456';
    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: 'funlee1314@gmail.com', // optional
                },
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            userHasAuthenticated(true);
            console.log(user);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async function onLoad() {
        try {
            const session = await Auth.currentSession();
            console.log(session);
            userHasAuthenticated(true);

            const credentials = await Auth.currentCredentials();
            const { accessKeyId, secretAccessKey, sessionToken } = credentials;
            // const s3 = new aws.S3({
            //     accessKeyId,
            //     secretAccessKey,
            // });
            const s3 = new aws.S3({
                accessKeyId,
                secretAccessKey,
            });
            s3.getObject(
                {
                    Bucket: 'fan-li.info',
                    Key: 'logo192.png',
                },
                function (err, data) {
                    if (err) console.log(err, err.stack);
                    // an error occurred
                    else console.log(data);
                }
            );
        } catch (error) {
            console.log('No current user');
        }
    }

    async function getAttributes() {
        const user = await Auth.currentAuthenticatedUser();
        // console.log(user);
        // const res = await Auth.updateUserAttributes(user, {
        //     'custom:role': 'admin',
        // });
        // console.log(res);
        console.log(user);
        console.log(await Auth.currentAuthenticatedUser());
    }

    async function signOut() {
        console.log('logout ', await Auth.signOut());
    }

    async function call() {
        const data = await API.get('testLambda-api', '/', {});
        // const data = await fetch('https://cors-demo.glitch.me/allow-cors', {
        //     mode: 'cors',
        // });
        // const data = await fetch(
        //     'https://gyifenmqv4.execute-api.ap-southeast-2.amazonaws.com/latest',
        //     { mode: 'cors' }
        // );
        // const data = await fetch(
        //     'https://1hffh1l7y5.execute-api.ap-southeast-2.amazonaws.com/default',
        //     { mode: 'cors' }
        // );
        console.log(data);
        // const opts = {
        //     method: 'GET',
        //     service: 'execute-api',
        //     region: 'ap-southeast-2',
        //     path: '/',
        //     host: 'http://localhost:3000/',
        //     url: `https://1hffh1l7y5.execute-api.ap-southeast-2.amazonaws.com/default`,
        // };
        // const credentials = await Auth.currentCredentials();
        // const { accessKeyId, secretAccessKey, sessionToken } = credentials;
        // const request = aws4.sign(opts, {
        //     accessKeyId,
        //     secretAccessKey,
        //     sessionToken,
        // });
        // delete request.headers.Host;
        // const response = await fetch(opts.url, {
        //     headers: request.headers,
        // });
        // if (response.ok) {
        //     console.log(response.json());
        // } else return { message: response.statusText };
    }

    return (
        <div>
            <h5>{isAuthenticated ? '1' : '2'}</h5>
            <button onClick={signUp}>sing up</button>
            <button onClick={signIn}>sing in</button>
            <button onClick={getAttributes}>getAttributes</button>
            <button onClick={signOut}>sign Out</button>
            <button onClick={call}>call</button>
        </div>
    );
}

export default Test;
