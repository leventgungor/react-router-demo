import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NewQuotes from './pages/NewQuotes'
import NotFound from './components/quotes/NotFound'
import { Switch, Route, Redirect } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
          <Route path = '/' exact>
            <Redirect to='/quotes'/>
          </Route>

          <Route path = '/quotes' exact> 
            <AllQuotes/>
          </Route>

          <Route path = '/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>

          <Route path = '/new-quote'>
            <NewQuotes/>
          </Route>

          <Route path = '*'>
            <NotFound/>
          </Route>
    </Switch>
  )
}

export default Router