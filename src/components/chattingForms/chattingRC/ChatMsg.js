/* 채팅창 UI 설계 부분 */

import React from 'react';
import styled from 'styled-components';
import palette from '../../colors/palette';

const ChatMsgBlock = styled.div`
    width: 100%;
`

const SendDate = styled.span`
    float: left;
    width: 98.5%;
    text-align: right;
`

const ReceiveDate = styled.span`
    float: left;
    width: 100%;
    padding-left: 15px;
`
const SendCard = styled.div`
    float: right;
    display: inline;
    padding : 20px;
    margin: 10px;
    background-color: ${palette.cyan[1]};
    border-radius: 10px;
`
const ReceiveCard = styled.div`
    float: left;
    display: inline;
    padding: 20px;
    margin: 10px;
    background-color: ${palette.gray[1]};
    border-radius: 10px;
`
const ChatMsg = () => {
    return (
        <>
            <ChatMsgBlock>
                <ReceiveCard>
                    hello~
                </ReceiveCard>
                <ReceiveDate>
                    2023-03-19
                </ReceiveDate>
            </ChatMsgBlock>
            
            <ChatMsgBlock>
                <SendCard>
                    oh, hi~
                </SendCard>
                <SendDate>
                    2023-03-19
                </SendDate>
            </ChatMsgBlock>

            <ChatMsgBlock>
                <ReceiveCard>
                    what are you doing?
                </ReceiveCard>
                <ReceiveDate>
                    2023-03-19
                </ReceiveDate>
            </ChatMsgBlock>

            <ChatMsgBlock>
                <SendCard>
                    I'm working!
                </SendCard>
                <SendDate>
                    2023-03-19
                </SendDate>
            </ChatMsgBlock>

            <ChatMsgBlock>
                <ReceiveCard>
                    Let's go Caffe?
                </ReceiveCard>
                <ReceiveDate>
                    2023-03-19
                </ReceiveDate>
            </ChatMsgBlock>

            <ChatMsgBlock>
                <SendCard>
                    greate!
                </SendCard>
                <SendDate>
                    2023-03-19
                </SendDate>
            </ChatMsgBlock>
        </>
    );
};

export default ChatMsg;
