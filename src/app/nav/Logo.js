import React from "react";
import { useSelector } from "react-redux";
import { selectSubreddit } from "../articles/articlesSlice";
// import { selectAllSubreddits } from "../aside/asideSlice";

export default function Logo () {
  const title = useSelector(selectSubreddit);
  // const subreddits = useSelector(selectAllSubreddits);
  // console.log(subreddits);
  
  return (
    <div className="nav-logo">
      <p className="logo-text">{title}</p>
    </div>
  );
};
