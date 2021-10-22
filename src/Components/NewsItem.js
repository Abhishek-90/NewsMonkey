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
            style={{height:'220px', width:'288px'}}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" he>{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
