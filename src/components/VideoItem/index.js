import {formatDistanceToNow} from 'date-fns'

import {
  ListItem,
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
  LinkItem,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {videoItemDetails} = props

  const updatedVideoItemDetails = {
    channelName: videoItemDetails.channel.name,
    profileImage: videoItemDetails.channel.profile_image_url,
    id: videoItemDetails.id,
    publishedDate: videoItemDetails.published_at,
    thumbnailUrl: videoItemDetails.thumbnail_url,
    title: videoItemDetails.title,
    viewsCount: videoItemDetails.view_count,
  }

  const {
    id,
    channelName,
    profileImage,
    title,
    publishedDate,
    thumbnailUrl,
    viewsCount,
  } = updatedVideoItemDetails

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

export default VideoItem
