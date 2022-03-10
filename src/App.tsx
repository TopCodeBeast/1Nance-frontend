import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='bg-cover bg-mobileBackground laptop:bg-background'>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default React.memo(App)