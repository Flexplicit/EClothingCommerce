import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './views/homepage/HomePage'
import ShopPage from "./views/shop/Shop"


function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />

          {/* <Route component={Page404} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
