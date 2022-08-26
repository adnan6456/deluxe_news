import React, {Component} from "react";

export default class NewsInfo extends Component{
    render(){

        let {title, newsUrl, imgUrl, description} = this.props
        return(
            <div className="card my-3 mx-3" style= {{width: "18rem"}} >
                <img src={imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target = "_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        );
    };
};
