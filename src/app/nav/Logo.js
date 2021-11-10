import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectSubredditTitle
} from '../articlePreviews/articlePreviewsSlice'

export default function Logo () {
  const title = useSelector(selectSubredditTitle);
  // console.log(title);
  const updatingTitle = () => {
    return (<h1 className="logo-title" >{title}</h1>)
  }

  
  useEffect(() => {
    
  })
  
  return (
    <div className="nav-logo">
      <img className="logo-img" src="/" alt="logo" />
      {updatingTitle()}
    </div>
  );
};
