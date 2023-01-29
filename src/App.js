import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/Tracker/trackerActions";
import Loader from "../src/components/Loader/Loader";
import AsyncImage from "./components/AsyncImage/AsyncImage";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import WatchList from "./components/WatchList/WatchList";
import ErrorBoundary from "./components/ErrorBound/ErrorBound";

function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.tracker);

  useEffect(() => {
    dispatch(actions.fetchAllItems());
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <Header />
          {/* <div className="abc"></div> */}
          {/* <div className="container mt-5">
          <Searchbar />
        </div> */}
          {/* <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav> */}
          <Routes>
            <Route path="/" element={<Searchbar />} />
            <Route path="/home" element={<Searchbar />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="about" element={<About />} />
            {/* <Route path="contact" element={<Contact/>} /> */}
            {/* <Route path="*" element={<Error/>} /> */}
          </Routes>
        </Router>

        {loader && <Loader backdrop={true} />}

        {/* Experiment */}
        {/* <AsyncImage src="https://dirask.com/static/bucket/1574890428058-BZOQxN2D3p--image.png" />
      <p>Some text here ...</p>
      <AsyncImage src="https://dirask.com/static/bucket/1590005168287-pPLQqVWYa9--image.png" />
      <p>Some text here ...</p>
      <AsyncImage src="https://dirask.com/static/bucket/1590005138496-MWXQzxrDw4--image.png" />
      <p>Some text here ...</p>
    <AsyncImage src="https://dirask.com/static/bucket/1590005318053-3nbAR5nDEZ--image.png" /> */}
        {/* Experiment ends */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
