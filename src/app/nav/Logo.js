import React from "react";
import { useSelector } from "react-redux";
import { selectSubreddit } from "../articles/articlesSlice";

export default function Logo () {
  const title = useSelector(selectSubreddit);
  
  return (
    <div className="nav-logo">
      <img className="logo-img" src="/" alt="" />
      <p className="logo-text">{title}</p>
    </div>
  );
};
