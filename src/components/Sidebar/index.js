import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  EachMenuItemListContainer,
  EachMenuItem,
  EachMenuText,
  LogoButton,
  Item,
  ContactUsContainer,
  ContactUsTitle,
  CompanyLogosContainer,
  Description,
  CompanyLogo,
} from './styledComponents'

const menuslist = [
  {
    id: 'HOME',
    title: 'Home',
    imageLogo: <MdHome size={24} />,
    navingateLink: '',
  },
  {
    id: 'TRENDING',
    title: 'Trending',
    imageLogo: <FaFire size={24} />,
    navingateLink: 'trending',
  },
  {
    id: 'GAMING',
    title: 'Gaming',
    imageLogo: <SiYoutubegaming size={24} />,
    navingateLink: 'gaming',
  },
  {
    id: 'SAVED',
    title: 'Saved videos',
    imageLogo: <RiMenuAddFill size={24} />,
    navingateLink: 'saved-videos',
  },
]

class Sidebar extends Component {
  state = {activeItem: ''}

  componentDidMount() {
    const {location} = this.props

    this.setActiveItem(location.pathname)
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props

    if (prevProps.location.pathname !== location.pathname) {
      this.setActiveItem(location.pathname)
    }
  }

  setActiveItem = path => {
    const activeMenu = menuslist.find(menu => `/${menu.navingateLink}` === path)

    this.setState({activeItem: activeMenu?.id || menuslist[0].id})
  }

  renderBannerItems = () => {
    const {activeItem} = this.state
    console.log(activeItem)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <EachMenuItemListContainer>
              {menuslist.map(each => {
                const {id, imageLogo, title, navingateLink} = each

                console.log(navingateLink)
                return (
                  <EachMenuItem
                    key={id}
                    isActive={id === activeItem}
                    isDarkTheme={isDarkTheme}
                  >
                    <Item to={`/${navingateLink}`}>
                      <LogoButton isActive={id === activeItem}>
                        {imageLogo}
                      </LogoButton>
                      <EachMenuText isDarkTheme={isDarkTheme}>
                        {title}
                      </EachMenuText>
                    </Item>
                  </EachMenuItem>
                )
              })}
            </EachMenuItemListContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderContactUs = () => (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? ' #f8fafc' : '#1e293b'
          return (
            <ContactUsContainer>
              <ContactUsTitle color={color}>CONTACT US</ContactUsTitle>
              <CompanyLogosContainer>
                <CompanyLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <CompanyLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <CompanyLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </CompanyLogosContainer>
              <Description color={color}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </ContactUsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SidebarContainer isDarkThem={isDarkTheme}>
              {this.renderBannerItems()}
              {this.renderContactUs()}
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
