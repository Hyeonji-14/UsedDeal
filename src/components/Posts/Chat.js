/* 채팅 페이지 */

import React from 'react';
import ChatForm from '../chattingForms/ChatForm';
import SendForm from '../chattingForms/chattingRC/SendForm';



const Chat = () => {
  return (
    <>
      <ChatForm />
      <SendForm />
    </>
  );
};

export default Chat;
