/* 카드형식 UI */

import styled from "styled-components"
import React from "react"


const CardWrapper = styled.div`
  flex-shrink: 0;
  width: 270px;
  height: 350px;
  margin: 15px;
  font-family: "Nirmala";
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: #fff;
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  transition: width 1s, height 1s, box-shadow 0.1s;
  cursor: pointer;


  @media all and (max-width: 1024px) {
    width: 270px;
    height: 440px;

    &:hover {
      width: 280px;
      height: 450px;
      box-shadow: rgba(155, 155, 155, 0.1) 0px 2px 51px 4px;
    }
  }

  .card-header {
    width: 100%;
    height: 10%;
    border-radius: 10px 10px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    
  }

  .card-body-img {
    width: 100%;
    height: 60%;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
      height: 100%;
      border: none;
      object-fit: cover;
    }
  }

  .card-body-text {
    flex-grow: 1;

    word-break: break-all;
    padding: 0.6rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-body-text-title {
      font-size: 1.3rem;
      color: darkslategray;
      font-weight: bold;
    }
  }

  .card-footer {
    border-top: 0.5px solid black;
    padding: 0.6rem;
    font-weight: 200;
    display: flex;
    color: #282c34;
    font-size: 1.1rem;
    justify-content: space-between;
  }
`

const Card = ({ id, img_url, title, content, username, date }) => {

  return (
    <>
      <CardWrapper
        onClick={() => {
          console.log("Detail")
        }}
      >
        <div className="card-body-img">
          <img alt="" src={img_url} />
        </div>
        <div className="card-body-text">
          <div className="card-body-text-title">{title}</div>
          <div className="card-body-text-content">{content}</div>
        </div>
        <div className="card-footer">
          <div className="username">{username}</div>
          <div className="date">{date}</div>
        </div>
      </CardWrapper> 
    </>
  )
}

export default React.memo(Card)