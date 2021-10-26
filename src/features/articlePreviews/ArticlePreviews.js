// Container holding all article previews

// import FullArticle from "../../components/FullArticle";

export default function Post() {
  return (
    <>
      <h1>All Articles</h1>

      <article>
        {/* <div class="header">
          <p>r/interestingasfuck</p><p>Posted by</p><p>u/acklsd</p><p>13 hours ago</p>
        </div> */}
        <div className="header">
          <a href="/" className="user-name">r/interestingasfuck</a>
          <p>Posted by</p>
          <a href="/" className="source">u/acklsd</a>
          <p className="when">13 hours ago</p>
        </div>
        <h2>The largest hotel in the world, with a staggering 10,000 rooms is currently under construction in Saudi Arabia.</h2>
        <img src="https://i.redd.it/l1xsgziquqv71.jpg" alt="alt" />
        {/* <p>Full Article Text</p> */}
        <div>
          <button>Comments</button>
          <button>Share</button>
        </div>
      </article>

      <article>
        <div class="header">
          {/* <img src="" alt="icon" /> */}
          <p>r/AskReddit</p><p>Posted by</p><p>u/doratramblam</p><p>2 hours ago</p>
        </div>
        <h2>The last text messege you sent will be inscribed on your tombstone. What will it say?</h2>
        {/* <img src="https://i.redd.it/l1xsgziquqv71.jpg" alt="alt" /> */}
        {/* <p>Full Article Text</p> */}
      </article>

      <article>
        <div class="header">
          {/* <img src="" alt="icon" /> */}
          <p>r/AskReddit</p><p>Posted by</p><p>u/madebygoogle</p><p>7 hours ago</p>
        </div>
        <h2>[Megathread] Meet the first-ever all-Google phones - Pixel 6 & Pixel 6 Pro. The smartest and fastest Pixel devices yet.</h2>
        {/* <img src="https://i.redd.it/l1xsgziquqv71.jpg" alt="alt" /> */}
        <p>TL;DR: Google is redefining what it means to be a Pixel. Let's take a look at some key features that make the new Pixel 6 and Pixel 6 Pro so revolutionary and why you should make the switch.</p>
        <h3>WHAT IS NEW ABOUT PIXEL</h3>
        <p>After being in the phone game for 5 years, Google decided to do things differently this time. This new generation of Pixels has been reimagined from the inside out. These phones were designed with people in mind, so they can be as helpful to you as possible and really adapt to how you want to use them. This is more than just a few cool new features and incrementally better hardware. Google has created the first-ever all-Google phone. Exciting new features include Magic Eraser in photos, Live Translate and many more. There’s never been a better time to switch to a Pixel.</p>
        <h3>WHAT ARE THE BEST NEW PIXEL FEATURES?</h3>
        <p>Now for the good stuff. Let’s have a look at how and why the new Pixel phones have been built to give you the most personalised experience you’ve ever had with your phone.</p>
        <img src="https://preview.redd.it/p6qx8acxggu71.png?width=2000&format=png&auto=webp&s=069c8609c33cb6269f9ca7d3ce4d217428a8d544" alt="advert banner" />
      </article>
  </>
  );
};