import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../colors/palette';
import Button from '../../Headers/Button';
import LoginGoogle from '../LoginGoogle';

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 3rem;
    align-items: center;
    text-align: center;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[1]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  sign: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>

      <form>
        <StyledInput 
        autoComplete="username" 
        name="username" 
        placeholder="아이디" />

        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />

        {/* 회원가입 부분일때 비밀번호 확인란이 밑에 추가됨 */}
        {type === 'sign' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}

        {/* 누르면 홈으로 가게 넘겨짐 */}
        <Link to="/">
          <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
            {text}
          </ButtonWithMarginTop>
        </Link>
      </form>

      <Footer>
        {type === 'login' ? (
          <Link to="/sign">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>

      {/* 구글 로그인 부분 */}
      <div style={{ display: 'flex' }}>
        <LoginGoogle />
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;