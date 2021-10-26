// Actual Article

export default function FullArticle({ article }) {
  return (
    <article>
      <img src="" alt="" />
      <h1>{article ? article.title : 'Full Article Title'}</h1>
      <p>{article ? article.text : 'Full Article Text'}</p>
    </article>
  );
};
