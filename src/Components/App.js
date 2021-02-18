import React, { Suspense, useEffect } from 'react'
import './App.css'

import { Route, BrowserRouter } from 'react-router-dom'
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

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/movie/:movieId" component={DetailPage} />
          <Route exact path="/search" component={SearchPage} />
        </BrowserRouter>

      </div>
    </Suspense>
  )
}

export default App

