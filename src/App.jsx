import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.scss";
import { useRoutes } from "./Routes";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./Pages";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes path={useRoutes.Home} element={<AuthWrapper />}>
        <Route index element={<Home />} />
        <Route path={useRoutes.About} element={<About />} />
        <Route path={useRoutes.Cart} element={<Cart />} />
        <Route path={useRoutes.Products} element={<Products />} />
        <Route
          path={useRoutes.Checkout}
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>

        <Route path={useRoutes.ProductID} element={<SingleProduct />} />
        <Route path={useRoutes.Error} element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};
