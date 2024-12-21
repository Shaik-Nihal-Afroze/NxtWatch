import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {FaFire} from 'react-icons/fa'

import Cookies from 'js-cookie'

import Header from '../Header'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import TrendingVideos from '../TrendingVideos'

import {
  MainHomeContainer,
  HomeContainer,
  AllVideosContainer,
  EachVideoList,
  FailureViewContainer,
  FailureImage,
  FailureText1,
  FailureText2,
  RetryButton,
  LoaderContainer,
  BannerContainer,
  FireButton,
  TrendingText,
} from './trendingStyles'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {videosList: []}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/trending`

    const token = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.setState({
        videosList: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderEachVideo = () => {
    const {videosList} = this.state

    return (
      <EachVideoList>
        {videosList.map(eachvideo => (
          <TrendingVideos key={eachvideo.id} videoItemDetails={eachvideo} />
        ))}
      </EachVideoList>
    )
  }

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
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureText1 color={color}>
              Oops! Something Went Wrong
            </FailureText1>
            <FailureText2>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText2>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoader = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? ' #64748b' : '#1e293b'
        return (
          <LoaderContainer>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color={color} height="50" width="50" />
            </div>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderEachVideo()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onClickRetryButton = () => {
    this.getVideos()
  }

  renderBanner = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#231f20' : '#ebebeb'
        const fireButtonBgColor = isDarkTheme ? '#000000' : '#d7dfe9'
        return (
          <BannerContainer bgColor={bgColor}>
            <FireButton fireButtonBgColor={fireButtonBgColor}>
              <FaFire color="#ff0000" size={30} />
            </FireButton>
            <TrendingText isDarkTheme={isDarkTheme}>Trending</TrendingText>
          </BannerContainer>
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
              <HomeContainer isDarkTheme={isDarkTheme} data-testid="trending">
                <Sidebar />
                <AllVideosContainer isDarkTheme={isDarkTheme}>
                  {this.renderBanner()}
                  {this.renderResults()}
                </AllVideosContainer>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
