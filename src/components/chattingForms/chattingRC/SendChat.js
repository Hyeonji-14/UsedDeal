/* 채팅 전송 버튼과 input box 있는 부분 */

import React from "react";
import styled from "styled-components";
import palette from "../../colors/palette";

const SendContainer = styled.div`
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
`

const InputBar = styled.input`
    float: left;
    width: 100%;
    height: 50px;
    margin-right: 10px;
`

const SendBtn = styled.button`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background-color: ${palette.gray[8]};
    margin-right: 10px;
    color: #ffffff;
    outline: none;
    border: none;
    &:hover {
        background-color: ${palette.gray[6]};
    }
`

const SendChat = () => {
    return (
        <SendContainer>
            <InputBar placeholder="메시지를 입력해주세요." />
            <SendBtn> 전송 </SendBtn>
        </SendContainer>
    );
};

export default SendChat;
