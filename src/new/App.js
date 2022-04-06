import React from "react";
import Nav from "./Nav/Nav";
import ArticlesList from "./Articles/ArticlesList";
import './normalize.css';
import './App.css';

export default function App () {
  return (
    <>
      <Nav />
      <ArticlesList />
    </>
  );
};