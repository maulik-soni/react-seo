import React, { Component } from 'react';

class HeaderMenu extends Component {
  push = (route) =>{
    this.props.history.push(route);
  }

  render() {
    return (
        <div>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <ul>
              <li onClick={()=>{this.push("/home")}}>Home</li>
              <li onClick={()=>{this.push("/login")}}>Login</li>
              <li onClick={()=>{this.push("/profile")}}>Profile</li>
            </ul>
          </div>
        </div>
    );
  }
}
export default HeaderMenu;