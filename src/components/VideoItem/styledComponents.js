import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 95%;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    width: 45%;
    height: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
    width: 30%;
    height: 150px;
    margin-bottom: 32px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
`

export const ThumbnailAndTitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  align-self: flex-start;
  margin-top: 20px;
`

export const TitleAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#212121')};
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 0px;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`

export const NameAndViewContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#313131')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 16px;
  font-weight: 600;
`

export const ViewsCountAndPublishedDateContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const ViewsCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#313131')};
  font-size: 12px;
  font-family: 'Roboto';
  margin-right: 16px;
  font-weight: 600;
  @media (min-width: 576px) {
    list-style-type: none;
  }
`

export const PublishedDate = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#313131')};
  font-family: 'Roboto';
  margin-right: 16px;
  font-weight: 600;
  font-size: 12px;
`
