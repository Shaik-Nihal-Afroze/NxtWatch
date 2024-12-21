import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {BiLike,BiDislike} from 'react-icons/bi'



import {RiMenuAddLine} from 'react-icons/ri'

import Cookies from 'js-cookie'

import Header from '../Header'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  MainHomeContainer,
  HomeContainer,
  AllVideosContainer,
  FailureViewContainer,
  FailureImage,
  FailureText1,
  FailureText2,
  RetryButton,
  LoaderContainer,
  VideoContainer,
  ReactPlayerContainer,
  VideoTitle,
  VideoDetailsContainer,
  ViewsCountAndPublishedDateContainer,
  ViewsCount,
  PublishedDate,
  LikesAndDislikesContainer,
  LikeButton,
  LikeText,
  DisLikeButton,
  DisLikeText,
  SavedButton,
  HorizontalLine,
  ProfileAndNameContainer,
  ProfileImage,
  NameAndSubscribersCountContainer,
  ChannelName,
  SubScribersCountText,
  Description,
  SavedText,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {videoItemDetails: {}, liked: false, disliked: false, save: false}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props

    const {params} = match

    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const token = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      const updatedVideoItemDetails = {
        channelName: data.video_details.channel.name,
        profileImage: data.video_details.channel.profile_image_url,
        id: data.video_details.id,
        publishedDate: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewsCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        subscribersCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
      }
      this.setState({
        videoItemDetails: updatedVideoItemDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoItemDetails, liked, disliked, save} = this.state

    const activeLikeText = liked ? '#2563eb' : '#64748b'

    const activeDisLikeText = disliked ? '#2563eb' : '#64748b'

    const {
      id,
      channelName,
      profileImage,
      title,
      publishedDate,
      description,
      viewsCount,
      videoUrl,
      subscribersCount,
    } = videoItemDetails

    console.log(publishedDate)

    const date = formatDistanceToNow(new Date(publishedDate))

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            onSaveVideoItem,
            savedVideosList,
            deleteVideo,
          } = value
          const titltColor = isDarkTheme ? '#cccccc' : '#383838'

          let isSaved
          const index = savedVideosList.findIndex(
            each => each.id === videoItemDetails.id,
          )

          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const savedColor = isSaved ? '#2563eb' : '#64748b'

          const savedText = isSaved ? 'Saved' : 'Save'

          const onClickSave = () => {
            this.setState(prevState => ({save: !prevState.save}))
            onSaveVideoItem(videoItemDetails)
            if (save === true) {
              deleteVideo(id)
            }
          }

          console.log(isSaved)
          return (
            <VideoContainer>
              <ReactPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </ReactPlayerContainer>
              <VideoTitle color={titltColor}>{title}</VideoTitle>
              <VideoDetailsContainer>
                <ViewsCountAndPublishedDateContainer>
                  <ViewsCount>{viewsCount} Views</ViewsCount>
                  <PublishedDate>{date}</PublishedDate>
                </ViewsCountAndPublishedDateContainer>
                <LikesAndDislikesContainer>
                  <LikeButton type="button" onClick={this.onClickLikeButton}>
                    <BiLike size={24} color={activeLikeText} />
                    <LikeText color={activeLikeText}>Like</LikeText>
                  </LikeButton>
                  <DisLikeButton
                    type="button"
                    onClick={this.onClickDisLikeButton}
                  >
                    <BiDislike size={24} color={activeDisLikeText} />
                    <DisLikeText color={activeDisLikeText}>Dislike</DisLikeText>
                  </DisLikeButton>
                  <SavedButton type="button" onClick={onClickSave}>
                    <RiMenuAddLine size={24} color={savedColor} />
                    <SavedText color={savedColor}>{savedText}</SavedText>
                  </SavedButton>
                </LikesAndDislikesContainer>
              </VideoDetailsContainer>
              <HorizontalLine />
              <ProfileAndNameContainer>
                <ProfileImage src={profileImage} alt="channel logo" />
                <NameAndSubscribersCountContainer>
                  <ChannelName color={titltColor}>{channelName}</ChannelName>
                  <SubScribersCountText color={titltColor}>
                    {subscribersCount} subscribers
                  </SubScribersCountText>
                </NameAndSubscribersCountContainer>
              </ProfileAndNameContainer>
              <Description color={titltColor}>{description}</Description>
            </VideoContainer>
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
        return this.renderSuccessView()
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

  onClickLikeButton = () => {
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({disliked: !prevState.disliked, liked: false}))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainHomeContainer isDarkTheme={isDarkTheme}>
              <Header />
              <HomeContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <Sidebar />
                <AllVideosContainer isDarkTheme={isDarkTheme}>
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

export default VideoItemDetails
