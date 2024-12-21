import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginRouteContainer,
  LoginFormContainer,
  ImageLogo,
  InputContainer,
  LabelText,
  CustomInput,
  LoginButton,
  ShowPasswordContainer,
  CheckboxInput,
  CheckBoxLabel,
  ErrorMsg,
} from './loginStyles'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
    isGuestLoginAccess: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickLoginAccess = () => {
    this.setState({isGuestLoginAccess: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password, isGuestLoginAccess} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    if (isGuestLoginAccess) {
      this.setState({username: 'rahul', password: 'rahul@2021'})
    } else {
      const loginDetails = {username, password}
    }
    const loginDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    const response = await fetch(loginUrl, options)

    const fetchedData = await response.json()
    console.log(fetchedData)

    if ((response.ok === true && isGuestLoginAccess) || response.ok) {
      this.onSubmitSuccess(fetchedData.jwt_token)
    } else {
      this.onSubmitFailure(fetchedData.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
      isGuestLoginAccess,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginRouteContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.onSubmitForm}
              >
                <ImageLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <LabelText htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LabelText>
                  <CustomInput
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelText htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LabelText>
                  <CustomInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onClickShowPassword}
                  />
                  <CheckBoxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </CheckBoxLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                <LoginButton type="submit" onClick={this.onClickLoginAccess}>
                  Guest Login
                </LoginButton>
                {showErrorMsg && isGuestLoginAccess === false && (
                  <ErrorMsg>*{errorMsg}</ErrorMsg>
                )}
              </LoginFormContainer>
            </LoginRouteContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
