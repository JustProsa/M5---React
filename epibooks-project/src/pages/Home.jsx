import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../components/navbar/Navbar";
import Jumbotron from "../components/jumbotron/Welcome";
import BookContext from "../contexts/bookContext";
import LatestRelease from "../components/release/LatestRelease";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <>
      <BookContext>
        <MainLayout>
          <Jumbotron />
          <LatestRelease />
        </MainLayout>
      </BookContext>
    </>
  );
};

export default Home;
