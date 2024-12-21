import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
  @media (min-width: 992px) {
    padding-right: 80px;
    padding-left: 56px;
    padding-top: 12px;
    padding-bottom: 12px;
    height: 100px;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: 50px;
  width: 100%;
`

export const PopupMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const MenuPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  height: 32px;
  width: 32px;
  margin-top: 18px;
  margin-right: 18px;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const LogoButton = styled.button`
  height: 32px;
  width: 32px;
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  border: none;
  background-color: transparent;
`

export const EachMenuItemListContainer = styled.ul`
  list-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
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

export const LogoutPopupContainer = styled.div`
  width: 300px;
  height: 180px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : 'white')};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 400px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoutText = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#00306e')};
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`

export const PopupLogoutButton = styled.button`
  height: 48px;
  width: 80px;
  border-radius: 6px;
  color: white;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: ${props => (props.darkTheme ? 'transparent' : '#3b82f6')};
  border: none;
  margin-right: 24px;
  border: 1px solid #7e858e;
  cursor: pointer;
`

export const CancelButton = styled.button`
  height: 48px;
  width: 80px;
  border-radius: 6px;
  color: #909090;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: ${props => (props.isDarkTheme ? 'transparent' : 'white')};
  border: none;
  margin-right: 24px;
  border: 1px solid #7e858e;
  cursor: pointer;
`

export const LogoImage = styled.img`
  width: 120px;
  height: 24px;
  @media (min-width: 768px) {
    width: 150px;
    height: 30px;
  }
`
export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  display: flex;

  height: 36px;

  width: 80px;

  border-radius: 6px;

  align-items: center;

  justify-content: center;

  border: 2px solid #3b82f6;

  color: #3b82f6;

  font-family: 'Roboto';

  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ItemsContainer = styled.ul`
  list-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ButtonItem = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-right: 8px;

  @media (min-width: 768px) {
    margin-top: 4px;
  }
`
export const MenuButtonItem = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-right: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ProfileButtonItem = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    margin-right: 24px;
  }
`

export const LogoutButtonItem = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-right: 8px;
  @media (min-width: 768px) {
    display: none;
    margin-right: 20px;
  }
`
