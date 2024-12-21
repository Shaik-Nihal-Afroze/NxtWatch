import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  deleteVideo: () => {},
  onSaveVideoItem: () => {},
  savedVideosList: [],
})

export default ThemeContext
