/* 포스트 메인 페이지 */

import React from 'react';
import Header from '../Headers/Header';
import Banner from './Banner';
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";
import palette from '../colors/palette';
import { Link } from 'react-router-dom';
import BoardList from './boards/BoardList';
import CardList from './boards/CardList';

const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`
const Search = styled.input`
    width: 30%;
    height: 50px;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`
const SearchBtn = styled.button`
    background-color: rgba(0,0,0,0);
    border: none;
    position: relative;
    &:hover {
    }
`

const Font = styled.div`
    font-family: "Nirmala";
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
`

const WriteBlock = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    padding: 40px;
`

const WriteBtn = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 20px;
    color: ${palette.gray[0]};
    background-color: ${palette.cyan[1]};
    border: none;
    font-size: 18px;
`

const MainPost = () => {
    return (
        <>
            <Header />
            <SearchBox>
                {/* 검색창 부분 */}
                <Search placeholder=' 원하는 상품을 입력해주세요.' />
                <SearchBtn>
                    <FiSearch size="30" color="#ab8484" />
                </SearchBtn>
            </SearchBox>
            <Banner />
            {/* 상품 목록 부분*/}
            <Font>Item List</Font>
            <WriteBlock>
                <WriteBtn>
                    <Link to="/write">
                        글쓰기
                    </Link>
                </WriteBtn>
            </WriteBlock>
            <BoardList>
                <Link to="/sub">
                    <CardList />
                </Link>
            </BoardList>
        </>
    );
};

export default MainPost;
