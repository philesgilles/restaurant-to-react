import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MainPage from "./pages/main";
import MenuPage from "./pages/menu";
import PicturesPage from "./pages/pictures";
import InfoPage from "./pages/info";
import ContactPage from "./pages/contact";
import OrderPage from "./pages/order";
import ReviewsPage from "./pages/reviews";
import CartPage from "./pages/cart";

import MainNavigation from "./components/navbar/navbar";
import Header from "./components/header";
import BookTable from "./components/bookTable";
import CustomChatbot from "./components/chatbot/CustomChatbot";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={MainPage} />
              <Route path="/menu" component={MenuPage} />
              <Route path="/pictures" component={PicturesPage} />
              <Route path="/info" component={InfoPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/order" component={OrderPage} />
              <Route path="/reviews" component={ReviewsPage} />
              <Route path="/cart" component={CartPage} />
            </Switch>
          </main>
          <BookTable />
          <CustomChatbot />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
