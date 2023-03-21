/* 채팅목록에 있는 리스트 UI 부분 */

import React from "react";
import styled from "styled-components";
import palette from "../colors/palette";

const Card = styled.div`
    width: 80%;
    height: 100px;
    &:hover {
        background-color: ${palette.cyan[1]}
    }
    padding-top: 1rem;
    padding-left: 4rem;
`

const UserID = styled.div`
    float: left;
    width: 70%;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
`

const Date = styled.div`
    float: left;
    width: 30%;
    height: 40px;
    font-size: 14px;
`

const Content = styled.div`
    width: 100%;
    height: 70px;
    overflow: hidden;
    line-height: 0.8;
`

const MessageList = ({item, i}) => {
    return(
        <Card>
            <UserID>
                {item.userid}
            </UserID>
            <Date>
                {item.date}
            </Date>
            <Content>
                {item.content}
            </Content>
            {/* 아이템으로 각 id를 정한 후 ChatForm으로 넘김 */}
        </Card>
    );
};

export default MessageList;