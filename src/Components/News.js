import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-4">
                <h2>News - Important Headlines</h2>
                <div className="row my-3 mx-3">
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                </div>
                <div className="row my-3 mx-3">
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="tempTitle" description="Temp Description"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News