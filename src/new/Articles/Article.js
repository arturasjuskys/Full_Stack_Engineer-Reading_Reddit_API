import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
import { selectArticles, selectArticleId, updateArticleID, loadComments } from "./articlesSlice";
import { selectSearchTerm } from "../Nav/navSlice";
import './Article.css';
import Comments from "./Comments";

export const displayDatePosted = (current, article) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerMonth * 365;
  const elapsed = current - article.created * 1000;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
  };
};

const displayScore = (article) => {
  const score = article.score;
  if (score > 1000) {
    return `${(score / 1000).toFixed(1)}k`;
  } else if (score === 0) {
    return 'vote';
  }
   else {
    return score;
  }
};

const displayImage = (article) => {
  const { url } = article;
  if (!url) return;
  if (url.includes('.jpg') || url.includes('.png')) {
    return <img src={url} alt="post" className="image" />;
  } else {
    return null;
  }
};

const displayVideo = (article) => {
  if (!article.media) return;
  if (!article.media.reddit_video) return;
  if (!article.media.reddit_video.fallback_url) return;
  const video = article.media.reddit_video.fallback_url;

  return <video className="article-video"  controls>
    <source src={video} type="video/mp4" className="video" />
  </video>
};

export default function Article () {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const searchTerm = useSelector(selectSearchTerm);
  let articleId = useSelector(selectArticleId);
  const current = Date.now();
  const [isActive, setActive] = useState(false);
  console.log(articleId);

  const searchedArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCommentsClick = (e) => {
    e.preventDefault();
    articleId = e.target.id;
    setActive(!isActive);
    dispatch(updateArticleID(articleId));
    return (
      <p>test</p>
    );
  };

  useEffect(() => {
    
    dispatch(loadComments(articleId));
  }, [dispatch, articleId]);

  if (searchedArticles.length === 0 ) return <h3>Nothing Matches</h3>;

  const renderArticle = searchedArticles.map(article => {
    const { id, title, selftext, author, num_comments } = article;

    return (
      <>
        <article key={id} id={id} className="article">
          <section className="article-header">
            <p>Posted by u/{author} {displayDatePosted(current, article)}</p>
            <h2>{title}</h2>
          </section>
          <section className="article-image">
            {displayImage(article)}
            {displayVideo(article)}
            <ReactMarkdown>{selftext}</ReactMarkdown>
          </section>
          <section className="article-footer" onClick={handleCommentsClick}>
            <div className="votes-comments-counter">
              <div className="score">
                <img className="score-icon vote-up" src="/img/arrow-up.png" alt="vote-up" />
                <p>{displayScore(article)}</p>
                <img className="score-icon vote-down" src="/img/arrow-down.png" alt="vote-down" />
              </div>
              <p id={id} className="comments-count">{num_comments} Comments</p>
            </div>
            {articleId === id ? <Comments /> : null}
          </section>
        </article>
      </>
    );
  });

  return (
    <>
      {renderArticle}
    </>
  );
};
