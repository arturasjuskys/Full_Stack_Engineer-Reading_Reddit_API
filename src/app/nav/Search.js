import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles, selectSearchedArticles } from '../articles/articlesSlice';
import { selectSearchTerm, updateSearchTerm } from './navSlice';

export default function Search () {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const articles = useSelector(selectSearchedArticles);
  console.log(articles);
  const searchedArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log(searchedArticles);

  const handleChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
    // dispatch(searchArticles(searchedArticles));
  };

  // useEffect(() => {
  //   dispatch(searchArticles(searchedArticles));
  // }, [dispatch, searchedArticles])

  return (
    <input
      className="nav-search"
      type="search"
      name="search"
      area-label="Search through site content"
      placeholder="Search"
      onChange={handleChange}
    />
  );
};
