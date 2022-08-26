import React, {Component} from "react";
import NewsItem from "./NewsItem";
import NewsInfo from "./NewsInfo";


export default class News extends Component{
    constructor(){
        super();

        this.state = {
            articles:[],
            loading: false
        }
    };

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c7a5164512e34c3daf2f7a51715e8c83"

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }



    render(){
        return (
            <div className="container my-3 ">
                <h2>Deluxe News - Top Headlines</h2>
                
                <div className="row">

                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url}>
                         <NewsItem  title = {element.title? element.title.slice(0,40): ' '}  newsUrl = {element.url}  description = {element.description? element.description.slice(0,60): " "} imgUrl = {element.urlToImage?element.urlToImage: "https://www.cartoq.com/wp-content/uploads/2022/08/royal-enfield-himalayan-450-teaser.jpg"}/>
                    </div>
                })};
                   
                    
                </div>
            </div>
        )
    }
}