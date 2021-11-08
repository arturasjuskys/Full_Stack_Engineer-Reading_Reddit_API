import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {
  selectFromReddit,
} from '../features/articlePreviews/articlePreviewsSlice';
import FullArticle from './FullArticle';

export default function SearchPreview () {
  const [searchTerm, setSearchTerm] = useState("");
  const articlesFromReddit = useSelector(selectFromReddit);
  
  const filteredArticles = articlesFromReddit.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-subreddit-container">
            <h1 className="subreddit-title">funny</h1>
          </div>
          <input
            className="searchField"
            type="search"
            name="search"
            area-label="Search through site content"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </nav>
      {filteredArticles.map((article) => {
        return <FullArticle article={article} key={article.id} />
      })}
    </>
  );
};
