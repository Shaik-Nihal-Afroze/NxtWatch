import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
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
  background-color: ${props => (props.isDarkTheme ? ' #212121' : '#ebebeb')};
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-top: 20px;
  padding-left: 28px;
  padding-right: 24px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    height: 300px;
  }
`

export const CloseButton = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  align-self: flex-end;
  border: none;
  background-color: transparent;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 36px;
`

export const BannerDescription = styled.p`
display:${props => (props.showBanner === false ? 'none' : 'display')};
color:"black"
font-size:20px;
font-family:"Roboto";
width:70%;
line-height:1.5;
margin-bottom:16px;
@media (min-width:768px){
  width:500px;
  font-size:24px;
}

`

export const GetItNowButton = styled.button`
  width: 130px;
  height: 45px;
  border: 2px solid black;
  font-size: 16px;
  font-family: 'Roboto';
  background-color: transparent;
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
