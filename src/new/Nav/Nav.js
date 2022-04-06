import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddit, updateSubreddit } from '../Articles/articlesSlice';
import './Nav.css';
import Search from './Search';

export default function Nav () {
  let subreddit = useSelector(selectSubreddit);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName === 'SECTION') return;
    const subs = [...document.getElementsByClassName('active')];
    subs.map(sub => sub.classList.remove('active'));
    e.target.classList.add('active');
    subreddit = e.target.id;
    dispatch(updateSubreddit(subreddit));
  };

  return (
    <nav>
      <section className='nav-subs' onClick={handleClick}>
        <h2 id="nasa">NASA</h2>
        <h2 id="240sx" className='active'>240sx</h2>
        <h2 id="astrophotography">Astrophotography</h2>
      </section>
      <Search />
    </nav>
  );
};
