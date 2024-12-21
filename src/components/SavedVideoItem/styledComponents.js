import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 95%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`

export const ListItem = styled.li`
  width: 95%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 576px) {
    width: 55%;
    height: 200px;
    margin-right: 24px;
  }
  @media (min-width: 1200px) {
    height: 260px;
    margin-right: 36px;
  }
`

export const ThumbnailAndTitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 576px) {
    width: 45%;
    align-self: flex-start;
  }
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  align-self: flex-start;
  margin-top: 20px;
  @media (min-width: 576px) {
    display: none;
  }
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
  @media (min-width: 576px) {
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
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
  color: ${props => (props.isDarkTheme ? '#909090' : '#7e858e')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`

export const ViewsCountAndPublishedDateContainer = styled.ul`
  list-style-type: disc;
  padding-left: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ViewsCount = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#7e858e')};
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  @media (min-width: 576px) {
    list-style-type: none;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`

export const PublishedDate = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#7e858e')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  @media (min-width: 1220px) {
    font-size: 18px;
  }
`
