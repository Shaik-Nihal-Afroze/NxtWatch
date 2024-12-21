import {
  ListItem,
  ThumbnailImage,
  Title,
  ViewsCount,
  LinkItem,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GamingVideoItem = props => {
  const {videoItemDetails} = props

  const updatedVideoItemDetails = {
    id: videoItemDetails.id,
    thumbnailUrl: videoItemDetails.thumbnail_url,
    title: videoItemDetails.title,
    viewsCount: videoItemDetails.view_count,
  }

  const {id, title, thumbnailUrl, viewsCount} = updatedVideoItemDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ListItem>
            <LinkItem to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <Title isDarkTheme={isDarkTheme}>{title}</Title>
              <ViewsCount>{viewsCount} Watching Worldwide</ViewsCount>
            </LinkItem>
          </ListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
