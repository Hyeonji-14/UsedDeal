import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auths/Login';
import Sign from './components/auths/Sign';
import MainPost from './components/Posts/MainPost';
import WritePost from './components/Posts/WritePost';
import SubPost from './components/Posts/SubPost';
import Chat from './components/Posts/Chat';

const App = () => {
  return (
    <Routes>
    <Route element={<MainPost />} path="/@:username" exact />
    <Route element={<MainPost />} path="/" exact />
    <Route element={<Login />} path="/login" />
    <Route element={<WritePost />} path="/write" />
    <Route element={<Sign />} path="/sign" />
    <Route element={<SubPost />} path="/sub" /> 
    <Route element={<Chat />} path="/chat" />
    </Routes>
  );
};
export default App;