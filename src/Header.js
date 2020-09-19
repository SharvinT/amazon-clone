import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 link tabs */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello {user && user.email.split("@")[0]}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd link*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link
          to={{
            pathname:
              "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
          }}
          target="_blank"
          className="header__link"
        >
          <div className="header__option">
            <span className="header__optionLineOne">Your prime</span>
            <span className="header__optionLineTwo">acct</span>
          </div>
        </Link>
      </div>
      {/* basket icon */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Shopping basket icon */}
          <ShoppingCartOutlinedIcon />
          {/* Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
