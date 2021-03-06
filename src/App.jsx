import React, { Component } from 'react'
import { NewsArticle } from './components/NewsArticle'

class App extends Component {
  render() {
    return (
      <div className="all-main-content">
        <main>
          <NewsArticle
            title="SDG Announces Hackathon!"
            body="SDG announces the 2020 Summer Hackathon"
          />
          <NewsArticle
            title="Student Graduation is Right Around The Corner"
            body="Our next cohort of students will be graduating in just over a week"
          />
          <NewsArticle
            title="SDG Standardizes on React"
            body="React is the best library for learning front end Web"
          />
        </main>
      </div>
    )
  }
}

export default App
