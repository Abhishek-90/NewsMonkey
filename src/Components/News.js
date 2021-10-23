import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { API_KEY } from "./Secret";
import PropTypes from 'prop-types'


export class News extends Component {

    static propTypes = {
        category:PropTypes.string,
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
        }
    }

    // hadleUpdateCategory(category){
    //     // console.log(this)
    //     this.News.setStaten({category:category});
    // }

    handleUpdateClick = async (update) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${ API_KEY }${this.state.category ? `&category=${this.props.category}`:""}&page=${this.state.page+update}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        const data = await fetch(url);
        const news = await data.json();

        this.setState({
            page: this.state.page + update,
            articles:news.articles,
            loading:false,
            category: this.state.category,
        })
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${ API_KEY }${this.state.category ? `&category=${this.props.category}`:""}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading:true});

        const data = await fetch(url);
        const news = await data.json();
        console.log(news.totalResults);
        this.setState({
            articles:news.articles,
            totalPages: Math.ceil(news.totalResults/this.props.pageSize),
            loading:false,
            category: this.state.category,
        })
    }
     
    render() {
        return (
        <div className="container my-4">
            <h2 className="text-center mb-4 mu-3" style={{margin: '35px'}}>News - Important Headlines</h2>
                {this.state.loading && <Spinner/>}
            <div className="row my-3 mx-3" >
                {!this.state.loading && this.state.articles.map((article) =>{
                    return <div className="col-md-4" key = {article.url}>
                        <NewsItem
                            title={article.title ? article.title: "No title"}
                            description={article.description?article.description:"No Details"}
                            urlToImage={article.urlToImage}
                            newsUrl = {article.url}
                        />
                    </div>
                    } 
                )}
            </div>
            <div className="container d-flex justify-content-between my-4">
                <button disabled = {this.state.page <= 1? true:false} type="button" className="btn btn-dark" onClick={()=>this.handleUpdateClick(-1)}>&larr; Previous</button>
                <button disabled = {this.state.page >= this.state.totalPages? true:false} className="btn btn-dark" onClick={()=>this.handleUpdateClick(1)}>Next &rarr;</button>
            </div>
        </div>
        );
    }
}

export default News;
