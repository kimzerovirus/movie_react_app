import React, { Suspense, useEffect } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'
import MainPage from './Views/MainPage/MainPage'
import DetailPage from './Views/DetailPage/DetailPage'
import SearchPage from './Views/SearchPage/SearchPage'

function App() {

  useEffect(() => {

    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
    document.getElementsByTagName('head')[0].appendChild(meta);

  }, [])

  return (
    <Suspense fallback={(<div>Loading ... Please Wait..</div>)}>
      <div className="App">

        <Switch>
          <Route exact path="http://kimzerovirus.github.io/movie_react_app/" component={MainPage} />
          <Route exact path="http://kimzerovirus.github.io/movie_react_app/movie/:movieId" component={DetailPage} />
          <Route exact path="http://kimzerovirus.github.io/movie_react_app/search" component={SearchPage} />
        </Switch>

      </div>
    </Suspense>
  )
}

export default App

