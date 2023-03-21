/* 채팅 합쳐놓은 부분 */

import React from 'react';
import styled from 'styled-components';
import ChatTemplate from './ChatTemplate';
import SendChat from './SendChat';

const SendFormBlock = styled.div`
    padding-top: 30px;
    width: 60%;
    height: 620px;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const SendForm = () => {
    return (
        <SendFormBlock>
            <ChatTemplate />
            <SendChat />
        </SendFormBlock>
    );
};

export default SendForm;
