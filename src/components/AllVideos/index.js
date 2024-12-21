import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosSearch} from 'react-icons/io'

import {
  AllVideosContainer,
  InputContainer,
  SearchInput,
  SearchButton,
  EachVideoList,
  FailureViewContainer,
  FailureImage,
  FailureText1,
  FailureText2,
  RetryButton,
  LoaderContainer,
} from './allVideoStyles'

import ThemeContext from '../../context/ThemeContext'

import VideoItem from '../VideoItem'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class AllVideos extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? 'white' : '#212121'

          if (videosList.length === 0) {
            return (
              <FailureViewContainer>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureText1 color={color}>
                  No Search results found
                </FailureText1>
                <FailureText2>
                  Try different key words or remove search filter
                </FailureText2>
                <RetryButton type="button" onClick={this.onClickRetryButton}>
                  Retry
                </RetryButton>
              </FailureViewContainer>
            )
          }
          return (
            <EachVideoList>
              {videosList.map(eachvideo => (
                <VideoItem key={eachvideo.id} videoItemDetails={eachvideo} />
              ))}
            </EachVideoList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderInputContainer = () => {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <InputContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                isDarkTheme={isDarkTheme}
                onChange={this.onChangeSearch}
              />
              <SearchButton
                type="button"
                isDarkTheme={isDarkTheme}
                onClick={this.onClickSearchButton}
                data-testid="searchButton"
              >
                <IoIosSearch size={18} />
              </SearchButton>
            </InputContainer>
          )
        }}
      </ThemeContext.Consumer>
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

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getVideos)
  }

  onClickRetryButton = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  render() {
    return (
      <AllVideosContainer>
        {this.renderInputContainer()}
        {this.renderResults()}
      </AllVideosContainer>
    )
  }
}

export default AllVideos
