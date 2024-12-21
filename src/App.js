import './App.css'

import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import ThemeContext from './context/ThemeContext'

import Gaming from './components/Gaming'

import Trending from './components/Trending'

import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onSaveVideoItem = newVideoitem => {
    const {savedVideosList} = this.state
    const videoIdIndex = savedVideosList.findIndex(
      each => each.id === newVideoitem.id,
    )

    if (videoIdIndex === -1) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, newVideoitem],
      }))
    } else {
      savedVideosList.splice(videoIdIndex, 1)
      this.setState({savedVideosList})
    }
  }

  deleteVideo = id => {
    const {savedVideosList} = this.state
    const res = savedVideosList.filter(each => each.id !== id)
    this.setState({savedVideosList: res})
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            onChangeTheme: this.onChangeTheme,
            onSaveVideoItem: this.onSaveVideoItem,
            savedVideosList,
            deleteVideo: this.deleteVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <NotFound component={NotFound} />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
