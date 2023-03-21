/* 회원가입 페이지 */

import React from 'react';
import AuthForm from './userForms/AuthForm';
import AuthTemplate from './userForms/AuthTemplate';

const Sign = () => {
  return (
    <AuthTemplate>
      <AuthForm type="sign" />
    </AuthTemplate>
  );
};

export default Sign;