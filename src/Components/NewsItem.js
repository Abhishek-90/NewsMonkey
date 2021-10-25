import React from "react";

function NewsItem(props) {
  let { title, description, urlToImage, newsUrl, date, author, source } = props;
  return (
    <div className={`card my-4 bg-${props.mode}`}>
      <span className="badge bg-danger">{source}</span>
      <img src={urlToImage} className="card-img-top" alt="related to news" />
      <div className="card-body ">
        <h5
          className={`card-title text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          {title}
        </h5>
        <p
          className={`card-text text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          {description}
        </p>
        <p
          className={`card-text text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          Date: {date}
        </p>
        <p
          className={`card-text text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          {" "}
          Author: {author ? author : "Unknown"}
        </p>
        <a
          rel="noreferrer"
          href={newsUrl}
          target="_blank"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
