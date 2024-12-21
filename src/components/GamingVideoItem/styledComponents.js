import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 40%;
  max-width: 150px;
  border-radius: 12px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  @media (min-width: 576px) {
    max-width: 30%;
  }
  @media (min-width: 1200px) {
    margin-bottom: 32px;
    margin-right: 16px;
    width: 22%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  @media (min-width: 576px) {
    height: 300px;
  }
  @media (min-width: 1200px) {
    height: 360px;
  }
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#212121')};
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 0px;

  font-weight: 600;
  @media (min-width: 576px) {
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`

export const ViewsCount = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#475569')};
  font-family: 'Roboto';
  line-height: 1.5;
  width: 90%;
  font-weight: 500;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`
