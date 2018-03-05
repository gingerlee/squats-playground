import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

function SiteNav() {
  const linkDecoration = {
    textDecoration: 'none',
    margin: '10px'
  };
  return(
    <div>
      <Navbar brand='logo' right>
        <NavItem><Link style={linkDecoration} to='/challenge'><a className='cyan-text'>Challenge Home</a></Link></NavItem>
      </Navbar>

      <style jsx>{`
          a:hover {
            opacity: .5;
          }
          div {
            display: flex;
            justify-content: center;
            padding: 2em;
          }
        `}</style>
    </div>
  );
}

export default SiteNav;
