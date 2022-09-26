import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
        <div className="my3">
      <div className="card my-3" >
        <span class="badge rounded-pill text-bg-dark ">{source}</span>
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            ...
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
      </div>
    );
  }
};
