import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
            {
              "source": { "id": "lequipe", "name": "L'equipe" },
              "author": "L'EQUIPE",
              "title": "Le flash sports du 21 octobre",
              "description": "Retrouvez toute l'actualité sportive dans votre flash quotidien.",
              "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-21-octobre/1293490",
              "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-l-equipe/1500000001558204/0:0,1498:999-640-427-75/5b3e1.jpg",
              "publishedAt": "2021-10-20T22:05:00+00:00",
              "content": "La première journée de procès dans l'affaire de la sextape, le nul 0-0 du LOSC face à Séville qui maintient l'espoir, Nikola Karabatic et le PSG qui se déplacent à Barcelone en Ligue des champions et… [+86 chars]"
            },
            {
              "source": { "id": "polygon", "name": "Polygon" },
              "author": "Owen S. Good",
              "title": "NBA 2K22 gives your star good role-playing as well as great game action",
              "description": "NBA 2K22’s MyCareer this year involves the player in off-court controversies related to his playing time, getting traded, and recording diss tracks — all before he even plays 10 games. And it makes the career mode the best among sports video games.",
              "url": "https://www.polygon.com/22737216/nba-2k22-mycareer-impressions-mp-traded-kendrick-perkins",
              "urlToImage": "https://cdn.vox-cdn.com/thumbor/FQWmL7BGraUlYk0kJog7dzoqdU4=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22943108/E_sT4R5XoAAIdk3.jpg",
              "publishedAt": "2021-10-20T21:16:40Z",
              "content": "Football or baseball, Formula 1 or soccer, you can count on me to be a nice guy. Its how Id prefer to think of myself, after all. In the role-playing choices offered by franchises like MLB The Show, … [+6734 chars]"
            },
            {
              "source": { "id": "bbc-news", "name": "BBC News" },
              "author": "BBC News",
              "title": "All Afghans have the right to a passport - Taliban",
              "description": "But sports personalities, people seeking medical treatment or wanting to study abroad will be prioritised.",
              "url": "http://www.bbc.co.uk/news/world-asia-58989021",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10C39/production/_121156686_p09z9jrp.jpg",
              "publishedAt": "2021-10-20T19:07:24.0463032Z",
              "content": "Every Afghan citizen is entitled to a passport, the Taliban's acting head of the passport office has said.\r\nAlam Gul Haqqani told BBC Worlds Matthew Amroliwala that they would issue passports to ever… [+138 chars]"
            },
            {
              "source": { "id": "goteborgs-posten", "name": "Göteborgs-Posten" },
              "author": "Ulrika Karlsson",
              "title": "Så såg det ut förr på Kungsportsplatsen, Korsvägen och på Kungsgatan",
              "description": "I Bazar Alliance kunde man köpa hästkött på 50-talet, på Kungstorget sålde flera hundra bönder sina varor från hästkärror på 1800-talet. Och visste ni att Karl IX:s ryttarstaty inte alltid stått på sin nuvarande plats? Följ med på en tidsresa genom gamla Göte…",
              "url": "http://www.gp.se/nyheter/g%C3%B6teborg/s%C3%A5-s%C3%A5g-det-ut-f%C3%B6rr-i-tiden-i-centrala-g%C3%B6teborg-1.57113083",
              "urlToImage": "http://www.gp.se/image/policy:1.57113013:1634290590/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
              "publishedAt": "2021-10-16T09:48:29Z",
              "content": null
            },
            {
              "source": {
                "id": "the-washington-times",
                "name": "The Washington Times"
              },
              "author": "The Washington Times http://www.washingtontimes.com",
              "title": "Latest Quizzes",
              "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
              "url": "https://www.washingtontimes.com/quiz/",
              "urlToImage": "https://www.gannett-cdn.com/presto/2020/04/22/USAT/144c17ed-83cc-40f3-a85c-6e68feb69b08-XXX_IMG_AP_OBIT_KUBRICK_I_FI_1_1_LVJ5TGK1.JPG?auto=webp&crop=1315,740,x0,y498&format=pjpg&width=1200",
              "publishedAt": "2021-02-10T03:52:37.2719772Z",
              "content": "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]"
            },
        
      ]
    constructor(){
        super();
        this.state = {
            articles: this.articles
        }
    }
    
    render() {
        return (
        <div className="container my-4">
            <h2>News - Important Headlines</h2>

            <div className="row my-3 mx-3" >
                {this.state.articles.map((article) =>{
                    return <div className="col-md-4" key = {article.url}>
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            newsUrl = {article.url}
                        />
                    </div>
                    } 
                )}

            </div>
        </div>
        );
    }
}

export default News;
