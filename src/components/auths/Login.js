/* 로그인 페이지 */

import React from 'react';
import AuthForm from './userForms/AuthForm';
import AuthTemplate from './userForms/AuthTemplate';

const Login = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default Login;