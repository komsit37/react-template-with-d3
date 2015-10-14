import React from 'react'
import {Link, IndexLink} from 'react-router'
//stateless functional component
//https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html
export default
    (props) =>
        <div>
            <h1> <IndexLink to="/"> Main </IndexLink> </h1>
            <ul>
                <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
                <li><Link to="/form" activeClassName="active">Form</Link></li>
                <li><Link to="/d3sample" activeClassName="active">D3 Sample</Link></li>
            </ul>
            {props.children}
        </div>
