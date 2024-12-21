import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100vh;
    flex-shrink: 0;
  }
`
export const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: 50px;
  width: 100%;
`

export const EachMenuItemListContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
    list-type: none;
    padding-left: 0px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
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
    if (props.isDarkTheme && props.isActive) {
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

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`

export const ContactUsTitle = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
`

export const CompanyLogosContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
  width: 80%;
`

export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`
