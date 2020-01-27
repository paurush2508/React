import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-Link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-Link" to="/posts">Posts</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-Link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-Link" to="/contact">Contact</Link>
        <li class="nav-item">
        <Link class="nav-Link" to="/register">Register</Link>
      </li>
      </li>
    </ul>
  </div>
</nav>
    </>)
}
export default Navbar;