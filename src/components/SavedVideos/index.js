import {Component} from 'react'

import {FaFire} from 'react-icons/fa'

import Header from '../Header'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import SavedVideoItem from '../SavedVideoItem'

import {
  MainHomeContainer,
  HomeContainer,
  AllVideosContainer,
  EachVideoList,
  FailureViewContainer,
  FailureImage,
  FailureText1,
  FailureText2,
  BannerContainer,
  FireButton,
  TrendingText,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideos = () => (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideosList} = value
          console.log(savedVideosList)

          return (
            <>
              {this.renderBanner()}
              <EachVideoList>
                {savedVideosList.map(eachvideo => (
                  <SavedVideoItem
                    key={eachvideo.id}
                    videoItemDetails={eachvideo}
                  />
                ))}
              </EachVideoList>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )

  renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : '#212121'
        return (
          <FailureViewContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureText1 color={color}>No saved videos found</FailureText1>
            <FailureText2>
              You can save your videos while watching them
            </FailureText2>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

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
            <TrendingText isDarkTheme={isDarkTheme}>Saved Videos</TrendingText>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          const res =
            savedVideosList.length === 0
              ? this.renderNoVideosView()
              : this.renderSavedVideos()
          return (
            <MainHomeContainer isDarkTheme={isDarkTheme}>
              <Header />
              <HomeContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                <Sidebar />
                <AllVideosContainer isDarkTheme={isDarkTheme}>
                  {res}
                </AllVideosContainer>
              </HomeContainer>
            </MainHomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
