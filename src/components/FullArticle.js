import React from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { selectAllArticles } from '../features/articlePreviews/articlePreviewsSlice'

export default function FullArticle() {
  const articles = useSelector(selectAllArticles);

  const getArticle = () => {
    const currentURL = window.location.href;
    const id = currentURL.slice(-6);
    const article = articles.filter((article) => article.id === id)[0];
    return article;
  };
  const article = getArticle();
  console.log(article);

  const getImg = () => {
    const img = article.url;
    console.log(img);
    if (img.includes('.jpg') || img.includes('.png')) {
      return <img className="full-article-img" src={article.url} alt="post" />;
    } else {
      return;
    }
  };

  const getVideo = () => {
    if (!article.media) return;
    const video = article.media.reddit_video.fallback_url;
    const height = article.media.reddit_video.height;
    const width = article.media.reddit_video.width;
    const result = {
      url: video,
      height,
      width,
    };
    console.log(result);
    return <video width={width} height={height} controls>
      <source src={video} type="video/mp4" />
    </video>
    };
  getVideo();

  return (
    <article className="full-article">
      <div className="article-score">
        <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
        <p className="score">{article.score}</p>
        <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
      </div>
      <div className="article-container">
        <div className="full-article-info">
          <p className="posted-by">Posted by u/{article.author}</p>
          <h2 className="full-title">{article.title}</h2>
        </div>
        {getImg()}
        {getVideo()}
        <ReactMarkdown>{article.selftext}</ReactMarkdown>
        <div className="info-comments">
          <img className="comments-icon" src="/img/comment.png" alt="comments icon" />
          <p className="comments">For comments</p>
          <a className="open-reddit" rel="noreferrer" target="_blank" href={`http://reddit.com/${article.permalink}`}>Open in Reddit</a>
        </div>
      </div>
    </article>
    );
};
