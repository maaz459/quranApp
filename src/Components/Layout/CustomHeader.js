import React, { Component } from "react";
import "./CustomHeader.css";
import { Link } from "react-router-dom";

export default class CustomHeader extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (

      <nav style={{ backgroundColor: "#006400" }} class="navbar navbar-expand-lg navbar-light py-0">
        <a class="navbar-brand" href="#">
          <img src="/99.png" class="mr-auto" width="40" height="40" alt=""></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto " >
            <li class="nav-item">
              <Link to="/surahlist" id="hadith" class="nav-link" >HOLY QURAN</Link>
            </li>
            <li class="nav-item">
              <Link to="/naats" id="hadith" class="nav-link" >NAAT</Link>
            </li>
            <li class="nav-item">
              <Link to="/hadith" id="hadith" class="nav-link" >HADITH</Link>
            </li>
            <li class="nav-item">
              <a id="hadith" class="nav-link" >MOSQUES</a>
            </li>
            <li key="dropdownItems" class="nav-item dropdown navDrop">
              <a style={{ color: "white" }} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
      </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">MOSQUES</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">TIMINGS</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">HAJJ UMRAH GUIDE</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">SUPPLICATIONS</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">ZAKAT</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">QIBLA</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">CALENDER</a>
                <a style={{ color: "#741626" }} class="dropdown-item" href="#">ABOUT US</a>
              </div>
            </li>
            <li key="adminLogin" class="nav-item">
              <a id="admin" class="nav-link" onClick={() => this.props.history.push("/admin")}>Admin Login</a>
            </li>
          </ul>

        </div>
      </nav>

    );
  }
}
