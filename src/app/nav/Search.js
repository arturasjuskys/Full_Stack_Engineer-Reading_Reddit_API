import React from 'react';
// import { useSelector } from "react-redux";
import {
  // selectAllArticles,
} from '../articlePreviews/articlePreviewsSlice';
// import FullArticle from '../../components/FullArticle';

export default function SearchPreview () {
  // const [searchTerm, setSearchTerm] = useState("");
  // const articlesFromReddit = useSelector(selectAllArticles);
  // const filteredArticles = articlesFromReddit.filter(article => {
  //   return (
  //     article.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     ||
  //     article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  
  return (
    <input
      className="nav-search"
      type="search"
      name="search"
      area-label="Search through site content"
      placeholder="Search"
      // onChange={handleChange}
    />
  );
};
