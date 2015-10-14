import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Home from './components/Home'
import D3Sample from './components/D3Sample'
import App from './App'

render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="dashboard" component={Dashboard} />
            <Route path="form" component={Form} />
            <Route path="d3sample" component={D3Sample} />
        </Route>
    </Router>
), document.getElementById('app'));

