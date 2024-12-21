import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
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
  padding-top: 24px;
  padding-left: 24px;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ebebeb')};
`

export const EachMenuItemListContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
    list-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const EachMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: 50px;
  width: 100%;
  background-color: ${props => {
    if (props.isActive && props.isDarkTheme) {
      return '#313131'
    } if (props.isActive) {
      return '#cbd5e1'
    } 
      return 'transparent'
    
  }};
`

export const EachMenuText = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 26px;
  font-weight: 500;
`

export const LogoButton = styled.button`
  height: 32px;
  width: 32px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  border: none;
  background-color: transparent;
`

export const EachVideoList = styled.ul`
  list-style: none;
  padding-left: 0px;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
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

export const BannerContainer = styled.div`
  display: flex;
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.bgColor};
  padding-left: 24px;
  width: 95%;
  @media (min-width: 1200px) {
    width: 100%;
  }
`

export const FireButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-right: 24px;
  background-color: ${props => props.fireButtonBgColor};
  border-radius: 35px;
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
    border-radius: 45px;
  }
`
export const TrendingText = styled.h1`
  color: ${props => (props.isDarkTheme ? 'white' : '#181818')};
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 42px;
    font-weight: 500;
  }
`
