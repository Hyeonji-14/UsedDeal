import React from 'react';
import styled from 'styled-components';

const BoardListBlock = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 40px;
`;

const ItemList = styled.div`
    width: 100%;
    height: 700px;
    margin-bottom: 20px;
    
`

const BoardList = ({children}) => {
    return (
        <BoardListBlock>
            <ItemList> {children} </ItemList>
        </BoardListBlock>
    );
};

export default BoardList;
