import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../colors/palette';
import ImageUploader from 'react-images-upload';
import { Link } from 'react-router-dom';

const WriteFormBlock = styled.div`
    padding-top: 2rem;
    padding-bottom: 1rem;
`;

const Title = styled.input`
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.cyan[1]};
    margin-top: 1rem;
    margin-bottom: 2rem;
    outline: none;
`

const Content = styled.textarea`
    width: 100%;
    height: 300px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.cyan[1]};
    margin-top: 1rem;
    margin-bottom: 2rem;
    outline: none;
    resize: none;
`

const Price = styled.input`
    width: 40%;
    height: 50px;
    font-size: 1rem;
    border-radius: 10px;
    margin-left: 10px;
`
const WriteBtn = styled.button`
  margin-right: 25px;
  margin-left: 25px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${palette.cyan[4]};
  &:hover {
    background-color: ${palette.cyan[5]}
  }
`;

const Font = styled.div`
    font-family: "Nirmala";
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
`

const WriteForm = ({
    onDrop,
    onChangeField
}) => {
    return (
        <>
            <Font> Write Page </Font>
            <WriteFormBlock>
                <form>
                    <Title
                        autoComplete='title'
                        name='title'
                        placeholder='제목을 입력해주세요.'
                        onChange={onChangeField} />

                    <Content
                        autoComplete='content'
                        name='content'
                        placeholder='내용을 입력해주세요.'
                        onChange={onChangeField} />
                    <Price
                        autoComplete='price'
                        name='price'
                        placeholder='가격을 입력해주세요.'
                        onChange={onChangeField} />
                    <ImageUploader
                        withIcon={true}
                        buttonText='이미지를 선택해주세요'
                        onChange={onDrop}
                        name="image"
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true} />
                </form>
            </WriteFormBlock>
            <Link to='/'>
                <WriteBtn>
                    등록하기
                </WriteBtn>
            </Link>
        </>
    );
};

export default WriteForm;
