import React from "react";
import { Link } from "react-router-dom";
import {
  SearchRounded,
  BookmarkBorder,
  PersonOutline,
  LocalMallOutlined,
} from "@material-ui/icons";

import ModalLogin from "../signIn/ModalLogin";

import "../../bootstrap.min.css";
import "./Header.css";

class Header extends React.Component {
  state = { modalShow: false };
  state = { isClicked: false };

  handleOnclick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  toggleDropdown = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  render() {
    const { modalShow } = this.state;
    const { isClicked } = this.state;

    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        {/* ********************Logo********************* */}
        <Link to="/">
          <img
            className="logo"
            src={require("../../assets/logo.png")}
            alt="logo"
          />
        </Link>

        {/** *****************Header Catogery************* */}
        <div
          className="headerLeft collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <span className="header__catogery">MEN</span>
          <span className="header__catogery">WOMEN</span>
          <span className="header__catogery">KIDS</span>
          <span className="header__catogery">OFFERS</span>
        </div>
        {/** *****************Search Bar************* */}

        <div className="searchBar">
          <input
            className="form-control border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <SearchRounded className="icon__search" />
        </div>

        {/* responsive menu toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          onClick={this.handleOnclick}
          isOpen={isClicked}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="headerRight">
            <Link
              onClick={this.toggleDropdown}
              isOpen={modalShow}
              data-toggle="modal"
            >
              <div className="icon__headerRight" data-toggle="modal">
                <PersonOutline />
                <span className="header__optionOne">profile</span>
              </div>
            </Link>

            <Link
            /*onClick={this.toggleDropdown}
              isOpen={modalShow}
              data-toggle="modal" */
            >
              <div className="icon__headerRight" data-toggle="modal">
                <BookmarkBorder />
                <span className="header__optionOne">wishlist</span>
              </div>
            </Link>

            <Link
            /* onClick={this.toggleDropdown}
              isOpen={modalShow}
              data-toggle="modal"*/
            >
              <div className="icon__headerRight" data-toggle="modal">
                <LocalMallOutlined />
                <span className="header__optionOne">cart</span>
              </div>
            </Link>

            <ModalLogin show={modalShow} onHide={this.toggleDropdown} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
