import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import { API_KEY } from "./Secret";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState,useEffect } from 'react'

function News(props) {

  let [articles,setArticles] = useState([]);
  let [loading,setLoading] = useState(true);
  let [page,setPage] = useState(1);
  let [totalResults,setTotalResults] = useState(0);

  const mount = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=4c23e36c9f07473097374db50f3f5a9c&page=${
      page
    }&pageSize=${props.pageSize}`;

    setLoading(true);
    props.setProgress(10);
    
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles));
    setPage(page+1);
    setLoading(false);
    setTotalResults(parsedData.totalResults);  
    
    props.setProgress(100);
  }  

  useEffect( () => mount(), [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=4c23e36c9f07473097374db50f3f5a9c&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();  

      setArticles(articles.concat(parsedData.articles));
      setPage(page+1);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className={`text-center text-${props.mode === 'light'?'dark':'light'}`} style={{ marginTop: "65px"}}>
          NewsMonkey - Top {props.category} Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner mode={props.mode}/>}
        >
            <div className="container">
            <div className="row">
                {articles.map((element) => {
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
                            mode={props.mode}
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

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
