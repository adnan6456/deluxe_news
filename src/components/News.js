import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component{
    static defaultProps = {
        country:"in",
        pagesize:8,
        category:"general"
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor(){
        super();

        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    };

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7a5164512e34c3daf2f7a51715e8c83&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }


    async componentDidMount(){
        this.updateNews();
    };

     handleNextClick = async ()=>{
       this.setState({page:this.state.page+1})
       this.updateNews()
    };
    
    handlePreviousClick = async()=>{
        this.setState({page:this.state.page-1})
        this.updateNews()

    };





    render(){
        return (
            <div className="container my-3 ">
                <h1 className="text-center my-3">Deluxe News - Top Headlines</h1>
                {this.state.loading&&<Spinner/>}
                
                <div className="row">

                {!this.state.loading&&this.state.articles.map((element)=>{
                    return <div className="col-md-4" key = {element.url}>
                         <NewsItem  title = {element.title? element.title.slice(0,50): ' '} source={element.source.name}author={element.author? element.author:"Unknown"} date={element.publishedAt} newsUrl = {element.url}  description = {element.description? element.description.slice(0,60): " "} imgUrl = {element.urlToImage?element.urlToImage: "https://www.cartoq.com/wp-content/uploads/2022/08/royal-enfield-himalayan-450-teaser.jpg"}/>
                    </div>
                })};
                   <div className="conatiner d-flex justify-content-between">
                   <button type="button" disabled={this.state.page<=1} onClick={this.handlePreviousClick} className="btn btn-primary">&laquo; Previous</button>
                   <button type="button" disabled= {this.state.page+1>Math.ceil(this.state.totalResults/20)} onClick={this.handleNextClick} className="btn btn-primary">Next &raquo;</button>
                   </div>
                    
                </div>
            </div>
        )
    }
}