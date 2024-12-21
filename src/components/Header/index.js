import Popup from 'reactjs-popup'

import {withRouter} from 'react-router-dom'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut,IoMdClose} from 'react-icons/io'



import {MdHome} from 'react-icons/md'
import {FaFire,FaMoon} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {Component} from 'react'

import Cookies from 'js-cookie'


import ThemeContext from '../../context/ThemeContext'
import {
  NavHeader,
  LogoImage,
  ItemsContainer,
  LogoutButtonItem,
  MenuButtonItem,
  ButtonItem,
  ProfileImage,
  LogoutButton,
  ProfileButtonItem,
  PopupMainContainer,
  MenuPopupContainer,
  LogoutPopupContainer,
  EachMenuItemListContainer,
  EachMenuItem,
  EachMenuText,
  CloseButton,
  LogoButton,
  PopupLogoutButton,
  LogoutText,
  ButtonsContainer,
  LinkItem,
  CancelButton,
} from './headerStyles'

const menuslist = [
  {id: 1, title: 'Home', imageLogo: <MdHome size={24} />, routeLink: ''},
  {
    id: 2,
    title: 'Trending',
    imageLogo: <FaFire size={24} />,
    routeLink: 'trending',
  },
  {
    id: 3,
    title: 'Gaming',
    imageLogo: <SiYoutubegaming size={24} />,
    routeLink: 'gaming',
  },
  {
    id: 4,
    title: 'Saved',
    imageLogo: <RiMenuAddFill size={24} />,
    routeLink: 'saved-videos',
  },
]

class Header extends Component {
  state = {activeItem: menuslist[0].id}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickActiveItem = id => {
    this.setState({activeItem: id})
  }

  render() {
    const {activeItem} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, onChangeTheme} = value

          const onClickChangeTheme = () => {
            onChangeTheme()
          }

          return (
            <NavHeader isDarkTheme={isDarkTheme}>
              <LinkItem to="/">
                <LogoImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </LinkItem>
              <ItemsContainer>
                <ButtonItem data-testid="theme" onClick={onClickChangeTheme}>
                  {isDarkTheme ? (
                    <BsBrightnessHigh size={24} color="white" />
                  ) : (
                    <FaMoon size={24} />
                  )}
                </ButtonItem>
                <PopupMainContainer>
                  <Popup
                    modal
                    trigger={
                      <MenuButtonItem>
                        <GiHamburgerMenu
                          size={24}
                          color={isDarkTheme ? 'white' : '#1e293b'}
                        />
                      </MenuButtonItem>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <MenuPopupContainer isDarkTheme={isDarkTheme}>
                        <CloseButton
                          onClick={() => close()}
                          isDarkTheme={isDarkTheme}
                          data-testid="closeButton"
                        >
                          <IoMdClose size={24} />
                        </CloseButton>
                        <EachMenuItemListContainer>
                          {menuslist.map(each => {
                            const {id, imageLogo, title, routeLink} = each
                            const onChaneActiveItem = () => {
                              this.onClickActiveItem(id)
                            }
                            return (
                              <EachMenuItem
                                key={id}
                                onClick={onChaneActiveItem}
                                isActive={id === activeItem}
                                isDarkTheme={isDarkTheme}
                              >
                                <LinkItem to={`/${routeLink}`}>
                                  <LogoButton isActive={id === activeItem}>
                                    {imageLogo}
                                  </LogoButton>
                                  <EachMenuText isDarkTheme={isDarkTheme}>
                                    {title}
                                  </EachMenuText>
                                </LinkItem>
                              </EachMenuItem>
                            )
                          })}
                        </EachMenuItemListContainer>
                      </MenuPopupContainer>
                    )}
                  </Popup>
                </PopupMainContainer>
                <ProfileButtonItem>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButtonItem>
                <PopupMainContainer>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <LogoutPopupContainer isDarkTheme={isDarkTheme}>
                        <LogoutText isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout?
                        </LogoutText>
                        <ButtonsContainer>
                          <CancelButton
                            type="button"
                            onClick={() => close()}
                            isDarkTheme={isDarkTheme}
                            data-testid="closeButton"
                          >
                            Cancel
                          </CancelButton>
                          <PopupLogoutButton
                            type="button"
                            onClick={this.onClickLogout}
                            isDarkTheme={isDarkTheme}
                          >
                            Confirm
                          </PopupLogoutButton>
                        </ButtonsContainer>
                      </LogoutPopupContainer>
                    )}
                  </Popup>
                </PopupMainContainer>
                <PopupMainContainer>
                  <Popup
                    modal
                    trigger={
                      <LogoutButtonItem type="button">
                        <IoIosLogOut
                          size={24}
                          color={isDarkTheme ? 'white' : 'black'}
                        />
                      </LogoutButtonItem>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <LogoutPopupContainer isDarkTheme={isDarkTheme}>
                        <LogoutText isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout?
                        </LogoutText>
                        <ButtonsContainer>
                          <CancelButton
                            type="button"
                            outline
                            onClick={() => close()}
                            isDarkTheme={isDarkTheme}
                            data-testid="closeButton"
                          >
                            Cancel
                          </CancelButton>
                          <PopupLogoutButton
                            type="button"
                            onClick={this.onClickLogout}
                            isDarkTheme={isDarkTheme}
                          >
                            Confirm
                          </PopupLogoutButton>
                        </ButtonsContainer>
                      </LogoutPopupContainer>
                    )}
                  </Popup>
                </PopupMainContainer>
              </ItemsContainer>
            </NavHeader>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
