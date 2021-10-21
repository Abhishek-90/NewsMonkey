import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,urlToImage,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={urlToImage}
            className="card-img-top"
            alt="related to news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" he>{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
