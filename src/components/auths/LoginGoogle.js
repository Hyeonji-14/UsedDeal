import React, {useEffect} from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = "615958863497-4ie0diav2j1ug5um4je4l6ldkem6q2it.apps.googleusercontent.com";

const LoginGoogle = ({onSocial}) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = (response) => {
        console.log(response);
    };

    const onFailure = (response) => {
        console.log(response);
    };
  return (
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Google로 로그인하기"
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    </div>
  );
};

export default LoginGoogle;
