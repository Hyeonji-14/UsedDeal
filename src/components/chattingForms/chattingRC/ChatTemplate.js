/* 채팅 UI 전체박스 부분 */

import React from 'react';
import styled from 'styled-components';
import ChatMsg from "./ChatMsg";

const ChatTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
    
`;

const ChatTemplate = () => {
    return (
        <ChatTemplateBlock>
            <ChatMsg />
        </ChatTemplateBlock>
    );
};

export default ChatTemplate;
