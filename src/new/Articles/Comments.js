import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from "react-redux";
import { clearComments, selectComments } from "./articlesSlice";
import './Comments.css';

export default function Comments () {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  if (comments.length === 0) return null;

  const handleClick = () => {
    dispatch(clearComments());
  };

  return (
    <article className='comments'>
      <button onClick={handleClick} className='comments-button'>
        Close
      </button>
      {comments.map(comment => {
        return <section className="comment">
        <ReactMarkdown>
          {comment.data.body}
        </ReactMarkdown>
      </section>
      })}
    </article>
  );
};
