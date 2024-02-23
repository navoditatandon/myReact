import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header: 
 *  - Logo
 *  - Nav Items
 * 
 * Body:
 *  - Search
 *  - Restaurant Container
 *  - Restaurant Card
 *          - Image
 *          - Name of the restaurant + star rating + cuisine + delivery time.
 * 
 * Footer:
 *  - Copyright
 *  - links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return(
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img
             className="res-logo"
             alt = "res-logo"
             src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName = "Meghna Foods" cuisine = "Biryani, North Indian, Asian"/>
                <RestaurantCard resName = "KFC" cuisine = "Burger, Fast Food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
