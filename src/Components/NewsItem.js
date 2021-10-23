import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,urlToImage,newsUrl,date,author,source} = this.props;
    return (
        <div className={`card my-4 bg-${this.props.mode}`}> 
        <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:'10%', zIndex:'100'}}>
            {source}
          </span>
          <img
            src={urlToImage}
            className="card-img-top"
            alt="related to news"
          />
          <div className="card-body ">
            <h5 className={`card-title text-${this.props.mode === 'dark'?'light':'dark'}`}>{title}</h5>
            <p className={`card-text text-${this.props.mode === 'dark'?'light':'dark'}`} >{description}</p>
            <p className={`card-text text-${this.props.mode === 'dark'?'light':'dark'}`}>Date: {date}</p>
            <p className={`card-text text-${this.props.mode === 'dark'?'light':'dark'}`}> Author: {author ? author : "Unknown"}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Continue Reading
            </a>
          </div>
        </div>
    );
  }
}

export default NewsItem;
