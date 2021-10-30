// Article preview item to route to full article

export default function ArticleListItem({ article }) {
  return (
    <article>
      <img src="" alt="" />
      <h2>{article ? article.title : 'Article List Item Title'}</h2>
      <p>{article ? article.text : 'Article List Item Preview Text'}</p>
    </article>
  );
};
