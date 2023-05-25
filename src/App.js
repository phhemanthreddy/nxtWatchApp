import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import ThemeContext from './context/ThemeContext'
import Login from './components/LoginRoute/index'
import Home from './components/HomeRoute/index'
import Trending from './components/TrendingRoute/index'
import SavedVideos from './components/SavedVideosRoute/index'
import NotFound from './components/NotFoundRoute/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import Gaming from './components/GamingRoute/index'

const App = () => {
  const [isDark, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{isDark, setTheme}}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ThemeContext.Provider>
  )
}

export default App
