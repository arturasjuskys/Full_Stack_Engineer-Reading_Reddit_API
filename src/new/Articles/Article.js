import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
// import { Link } from 'react-router-dom';
import { selectArticles, selectComments } from "./articlesSlice";
// import { selectSearchTerm } from "../nav/navSlice";
import './Article.css';

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

export const displayScore = (article) => {
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
  // console.log(article.title);
  // console.log(video.fallback_url);

  return <video className="article-video"  controls>
    <source src={video} type="video/mp4" className="video" />
  </video>
};

const displayComments = async (e) => {
  const id = e.target.id;
  console.log(id);

  const data = await fetch(`https://www.reddit.com/comments/${id}.json`);
  const json = await data.json();
  const commentsList = json[1].data.children;
  console.log(commentsList);

  commentsList.map(comment => {
    const { body, body_html, author_fullname, created } = comment.data;
    console.log(body);
    // console.log(body_html);
    
    return <article className="comment">
      <p>{body}</p>
    </article>
  })
};

export default function Article () {
  const articles = useSelector(selectArticles);
  // const comments = useSelector(selectComments);
  const current = Date.now();
  console.log(articles);

  const renderArticle = articles.map(article => {
    const { id, title, selftext, author, num_comments } = article;
    // console.log(article);

    return (
      <article key={id} className="article">
      <section className="article-header">
        <p>Posted by u/{author} {displayDatePosted(current, article)}</p>
        <h2>{title}</h2>
      </section>
      <section className="article-image">
        {displayImage(article)}
        {displayVideo(article)}
        <ReactMarkdown>{selftext}</ReactMarkdown>
      </section>
      <section className="article-footer">
        <div className="score">
          <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
          <p>{displayScore(article)}</p>
          <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
        </div>
        <div className="comments" onClick={displayComments}>
          <p id={id}>{num_comments} Comments</p>
        </div>
      </section>
    </article>
    );
  });

  return (
    <>
      {renderArticle}
    </>
  );
};
