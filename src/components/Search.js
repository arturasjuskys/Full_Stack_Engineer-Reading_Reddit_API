import React, { useState } from 'react';
import { selectFromReddit } from '../features/articlePreviews/articlePreviewsSlice';
import { useSelector } from "react-redux";
import FullArticle from './FullArticle';

export default function SearchPreview () {
  const articlesFromReddit = useSelector(selectFromReddit);
  const [searchTerm, setSearchTerm] = useState("");
  let subredditTitle = 'Reddit';
  if (articlesFromReddit.length > 0) {
    subredditTitle = articlesFromReddit[0].subreddit_name_prefixed;
  }
  const filteredArticles = articlesFromReddit.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  console.log(searchTerm);
  const handleChange = (e) => {

    setSearchTerm(e.target.value);
  };
  
  return (
    <>
      <nav>
        <div className="nav-container">
          <h1 className="subreddit-title">{subredditTitle}</h1>
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
