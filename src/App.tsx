import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='bg-cover bg-mobileBackground laptop:bg-background'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ico" component={Home} />
            <Route exact path="/solutions" component={Home} />
            <Route exact path="/whitePaper" component={Home} />
            <Route exact path="/tokenSale" component={Home} />
            <Route exact path="/roadmap" component={Home} />
            <Route exact path="/more" component={Home} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default React.memo(App)