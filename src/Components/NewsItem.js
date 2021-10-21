import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="Photo related to news"/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="/newsDetails" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
