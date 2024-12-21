import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import AllVideos from '../AllVideos'

import Header from '../Header'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  MainHomeContainer,
  HomeContainer,
  BannerContainer,
  BannerLogo,
  BannerDescription,
  GetItNowButton,
  CloseButton,
  AllVideosContainer,
} from './homeStyles'

class Home extends Component {
  state = {showBanner: true}

  onClickCloseButton = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
      <BannerContainer data-testid="banner">
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.onClickCloseButton}
        >
          <IoMdClose size={24} />
        </CloseButton>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </BannerContainer>
    )

  render() {
    const {showBanner} = this.state
    const showBannerItem = showBanner && this.renderBanner()
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainHomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContainer isDarkTheme={isDarkTheme}>
                <Sidebar />
                <AllVideosContainer isDarkTheme={isDarkTheme}>
                  {showBannerItem}
                  <AllVideos />
                </AllVideosContainer>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
