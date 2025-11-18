import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>TaazaKhabar - Top Headlines</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem title="I am Tite" description="I am a descripiton" />
            </div>

            <div className="col-md-4">
              <NewsItem title="I am Tite" description="I am a descripiton" />
            </div>

            <div className="col-md-4">
              <NewsItem title="I am Tite" description="I am a descripiton" />
            </div>

          </div>
        </div>
      </div>
    )
  }
}
