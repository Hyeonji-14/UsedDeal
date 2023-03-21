/* 글쓰기 페이지 */

import React from 'react';
import styled from 'styled-components';
import Header from '../Headers/Header';
import WriteForm from './extra/WriteForm';
import WriteTemplate from './extra/WriteTemplate';

const WritePost = () => {
  return (
    <>
      <Header />
      <WriteTemplate>
        <WriteForm />
      </WriteTemplate>
    </>
  );
};

export default WritePost;
