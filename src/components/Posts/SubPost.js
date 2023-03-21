/* 포스트 상세 페이지 */

import React from 'react';
import styled from 'styled-components';
import Header from '../Headers/Header';

const SubPostBlock = styled.div`
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media all and (min-width: 1024px){
    .board-wrapper{
      width: 500px;
      .board-body{
        height: 400px;
      }
    }
  }

  @media all and (max-width: 1024px) {
    .board-wrapper{
      width: 450px;
      .board-body{
        height: 360px;
      }
    }
  }
  @media all and (max-width: 768px) {
    .board-wrapper {
      width: 400px;
      .board-body{
        height: 320px;
      }
    }
  }


  @media all and (max-width: 768px) {
    .board-wrapper {
      width: 360px;
      .board-body{
        height: 300px;
      }
    }
  }

  .edit-delete-button{
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 0.7rem;
  button{
    font-size: 1.2rem;
  }
  .delete-button{
    margin-left: 0.5rem;
  }
}

.modal{
  .modal-title{
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 0;
  }
  .modal-button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      font-size: 1.4rem;
    }
  }
}
  .board-wrapper{
    transition: width 1s;
    margin: 0 auto 1.5rem auto;
    opacity: 0;
    border-radius: 10px;
    animation: smoothAppear 1.5s forwards;
    animation-delay: 0.5s;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    padding: 4rem;
    .board-header {
      justify-content: space-between;
      align-items: baseline;
      display: flex;
      .board-header-username{
        font-size: 2rem;
      }
      .board-header-date{
        font-size: 1.5rem;
        vertical-align: baseline;
      }
    }
    .board-body{
      display: flex;
      .board-image{
        flex-shrink: 0;
        margin-right: 1rem;
        width: 50%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .board-title-content{
        word-break: break-all;
        margin-left: 1rem;
        overflow: auto;
        flex-grow: 1;
        &::-webkit-scrollbar {
          display: none;
        }
        .board-title{
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: midnightblue;
        }
        .board-content{
          font-size: 1.2rem;
        }
      }
    }
    .board-body{
      display: flex;
    }
    .board-footer{

    }
  }
`;

const SubPost = () => {
  return (
    <>
    <Header />
      <SubPostBlock>
        <div className="board-wrapper">
          <div className="board-header">
            <div className="board-header-username">ID</div>
            <div className="board-header-date">만든시간</div>
          </div>
          <hr />
          <div className="board-body">
            <div className="board-image">
              이미지 들어갈 곳
            </div>
            <div className="board-title-content">
              <div className="board-title">제목</div>
              <div className="board-content">내용</div>
            </div>
          </div>
          <hr />
          <div className="board-footer"></div>
        </div>
      </SubPostBlock>
    </>
  );
};

export default SubPost;
