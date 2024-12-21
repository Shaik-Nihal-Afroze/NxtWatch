import {formatDistanceToNow} from 'date-fns'

import {
  ListItem,
  LinkItem,
  ProfileImage,
  ThumbnailImage,
  ThumbnailAndTitleLogo,
  TitleAndNameContainer,
  Title,
  NameAndViewContainer,
  ChannelName,
  ViewsCountAndPublishedDateContainer,
  ViewsCount,
  PublishedDate,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideoItem = props => {
  const {videoItemDetails} = props

  const {
    id,
    channelName,
    profileImage,
    title,
    publishedDate,
    thumbnailUrl,
    viewsCount,
  } = videoItemDetails

  const date = formatDistanceToNow(new Date(publishedDate))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ListItem>
            <LinkItem to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailAndTitleLogo>
                <ProfileImage src={profileImage} alt="channel logo" />
                <TitleAndNameContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <NameAndViewContainer>
                    <ChannelName isDarkTheme={isDarkTheme}>
                      {channelName}
                    </ChannelName>
                    <ViewsCountAndPublishedDateContainer>
                      <ViewsCount isDarkTheme={isDarkTheme}>
                        {viewsCount} Views
                      </ViewsCount>
                      <PublishedDate isDarkTheme={isDarkTheme}>
                        {date}
                      </PublishedDate>
                    </ViewsCountAndPublishedDateContainer>
                  </NameAndViewContainer>
                </TitleAndNameContainer>
              </ThumbnailAndTitleLogo>
            </LinkItem>
          </ListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
