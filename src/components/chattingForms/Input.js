/* 채팅목록 검색 및 input 설계 부분 */

import React from "react";
import styled from "styled-components";
import palette from "../colors/palette";

const ButtonBoard = styled.div`
    width: 10%;
    float: left;
    margin-top: 30px;
    margin-bottom: 20px;
`

const Button = styled.button`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    background-color: ${palette.cyan[4]};
    margin-left: 10px;
    color: #ffffff;
    outline: none;
    border: none;
    &:hover {
        background-color: ${palette.cyan[5]};
    }
`

const SearchBar = styled.input`
    float: left;
    width: 30%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 5.1%;
`;

const Input = ({ placeholder }) => {
    return (
        <>
            <SearchBar
                name="searchBar"
                type="text"
                placeholder={placeholder}
            />
            <ButtonBoard>
                <Button>검색</Button>
            </ButtonBoard>
        </>
    );

};

export default Input;

