/* 채팅 목록 UI 설계 및 가상 데이터 삽입 부분 */

import React from "react";
import styled from "styled-components";
import Header from "../Headers/Header";
import Input from "../chattingForms/Input";
import MessageList from "../chattingForms/MessageList";

const Board = styled.div`
    float: left;
    padding-top: 10px;
    width: 30%;
    margin-left: 1%;
    margin-right: 3%;
    border-right-style: groove;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`
const HeaderBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;
`
const Font = styled.div`
    font-family: "Nirmala";
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
`

const ChatForm = () => {
    const testData = [
        { "userid": "aaaa01", "date": "2023.03.19", "content": "aaaa" },
        { "userid": "aaaa02", "date": "2023.03.19", "content": "bbbb" },
        { "userid": "aaaa03", "date": "2023.03.19", "content": "cccc" },
        { "userid": "aaaa04", "date": "2023.03.19", "content": "dddd" },
        { "userid": "aaaa05", "date": "2023.03.19", "content": "eeee" },
        { "userid": "aaaa06", "date": "2023.03.19", "content": "ffff" },
    ];

    return (
        <>
            <Header />
            <HeaderBox>
                <Input placeholder="User ID를 입력해주세요." />
            </HeaderBox>
            <Board>
                <Font> Chatting List </Font>
                <List>
                    {/* MessageList에서 받은 item으로 가짜 데이터 받음 */}
                    { testData.map((item, i) => {
                            return (
                                <MessageList item={item} i={i} />
                            );
                        }) 
                    }
                </List>
            </Board>
        </>
    );
};

export default ChatForm;
