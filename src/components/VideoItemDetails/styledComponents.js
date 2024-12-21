import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media (min-width: 768px) {
    flex-direction: row;
    padding-right: 80px;
  }
`
export const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    min-height: 100vh;
    flex-shrink: 0;
  }
`

export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ebebeb')};
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const FailureImage = styled.img`
  width: 300px;
  height: 240px;
  @media (min-width: 992px) {
    width: 440px;
    height: 320px;
  }
`
export const FailureText1 = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`

export const FailureText2 = styled.p`
  color: #64748b;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 24px;
    width: 50%;
  }
`
export const RetryButton = styled.button`
  height: 45px;
  width: 90px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  padding-top: 100px;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1110px;
`
export const ReactPlayerContainer = styled.div`
  display: flex;
  width: 95%;
  min-width: 320px;
  height: 200px;
  background-size: cover;
  @media (min-width: 992px) {
    width: 95%;
    max-width: 1100px;
    height: 500px;
  }
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsCountAndPublishedDateContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: flex-start;
`
export const ViewsCount = styled.p`
  font-size: 14px;
  list-style-type: none;
  color: #606060;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  @media (min-width: 576px) {
    list-style-type: none;
    font-size: 18px;
  }
`

export const PublishedDate = styled.p`
  color: #606060;
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`

export const LikesAndDislikesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color};
  border: none;
  background-color: transparent;
  margin-right: 24px;
  cursor: pointer;
`

export const LikeText = styled.button`
  font-size: 18px;
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 10px;
  font-weight: 600;
`

export const DisLikeButton = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
  border: none;
  background-color: transparent;
  margin-right: 24px;
`

export const DisLikeText = styled.button`
  font-size: 18px;
  font-family: 'Roboto';
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  margin-left: 10px;
  font-weight: 600;
`
export const SavedButton = styled.div`
  display: flex;
  font-weight: 500;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  color: ${props => props.color};
  border: none;
  background-color: transparent;
  margin-right: 24px;
  cursor: pointer;
`
export const SavedText = styled.button`
  font-size: 18px;
  font-family: 'Roboto';
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  margin-left: 10px;
  font-weight: 600;
`

export const HorizontalLine = styled.hr`
  margin-top: 20px;
  border: 1px solid #cbd5e1;
  width: 100%;
  margin-left: 0px;
`

export const ProfileAndNameContainer = styled.div`
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

export const NameAndSubscribersCountContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  margin-bottom: 0px;
`

export const SubScribersCountText = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
  margin-right: 20px;
  font-weight: 600;
  line-height: 1.5;
  @media (min-width: 992px) {
    font-size: 18px;
    width: 90%;
  }
`
