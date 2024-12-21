import {Component} from 'react'

import Header from '../Header'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  MainHomeContainer,
  HomeContainer,
  AllVideosContainer,
  FailureViewContainer,
  FailureText1,
  FailureText2,
  FailureImage,
} from './styledComponents'

class NotFound extends Component {
  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : '#212121'
        return (
          <FailureViewContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <FailureText1 color={color}>Page not found</FailureText1>
            <FailureText2>
              We are sorry, the page you requested could not be found.
            </FailureText2>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainHomeContainer isDarkTheme={isDarkTheme}>
              <Header />
              <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                <Sidebar />
                <AllVideosContainer isDarkTheme={isDarkTheme}>
                  {this.renderFailureView()}
                </AllVideosContainer>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
