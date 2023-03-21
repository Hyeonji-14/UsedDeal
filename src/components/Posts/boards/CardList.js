import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardListBlock = styled.div`
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

function CardList() {

    return (
        <CardListBlock>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardListBlock>
    )
}

export default CardList;
