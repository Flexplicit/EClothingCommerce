import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './views/homepage/HomePage'

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* <Route component={Page404} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
