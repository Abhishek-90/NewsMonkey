import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { API_KEY } from "./Secret";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${API_KEY}&page=${
        this.state.page
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: 1,
        articles: parsedData.articles,
        loading: true,
      });  
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${API_KEY}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: this.state.articles.concat(parsedData.articles),
        loading: true,
        totalResults:parsedData.totalResults,
      });  
  };

  handleUpdate = async (update) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${API_KEY}&page=${
      this.state.page + update
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + update,
      articles: parsedData.articles,
      loading: true,
    });  
  }

  render() {
    return (
      <>
        <h1 className={`text-center text-${this.props.mode === 'light'?'dark':'light'}`} style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.props.category} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner mode={this.props.mode}/>}
        >
            <div className="container">
            <div className="row">
                {this.state.articles.map((element) => {
                    return (
                        <div className="col-md-4" key={element.url}>
                        <NewsItem
                            title={element.title ? element.title : ""}
                            description={element.description ? element.description : ""}
                            urlToImage={element.urlToImage}
                            author={element.author}
                            source={element.source.name}
                            date={new Date(element.publishedAt).toGMTString()}
                            newsUrl={element.url}
                            mode={this.props.mode}
                        />
                        </div>
                    );
                })}
            </div>
            </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
