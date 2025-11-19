import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6907a3ac9fb04b01a8d6247397ce316d&page=1&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log("Previous")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6907a3ac9fb04b01a8d6247397ce316d&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
    
  }

  handleNextClick = async ()=>{

    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6907a3ac9fb04b01a8d6247397ce316d&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })

    }

    
  }



  render() {
    return (
        <div className="container my-3">
          <h2>TaazaKhabar - Top Headlines</h2>
          
          <div className="row">
            {this.state.articles.map((element)=> {
              return <div key={element.url} className="col-md-4">
                        <NewsItem
                          title={element.title} 
                          description={element.description} 
                          imageUrl={element.urlToImage?element.urlToImage:"https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/11/Tim-Cook-retirement-leak-is-clearly-deliberate-to-test-market-reaction.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"} 
                          newsUrl={element.url} />
                      </div>
              })}
          </div>
          
          <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    )
  }
}
