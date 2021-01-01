import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterContent from "../components/Footer/FooterContent";
import Nav from "../components/Nav";
import resumeData from '../components/resumeData';
import NavTabs from '../components/NavTabs';
import Home from "../components/Home/Home";
import Projects from "../components/Project/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from '../components/Contact/Contact';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Theme from '../components/Theme';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


// Sections
// - Career Goals: Your professional goals for the next five years.
// - Would be nice
//    - References - 3-5 people who can verify your professional qualifications, from faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects


export default function App() {
  // States
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  // Data?
  function getData(data) { }
  function storeData(key, value) { }

  useEffect(() => {
    storeData('data', state);
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  //Routing tabs
  const allTabs = ["/", "/projects", "/aboutme", "/contact"];

  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Nav routes={allTabs}>
            <Route
              path="/"
              render={({ location }) => (
                <>
                  <NavTabs routes={allTabs} value={location.pathname} />
                </>
              )}
            />
          </Nav>

          <Switch>
            <Route exact path={allTabs[0]} render={() => <Home />} />
            <Route path={allTabs[1]} render={() => <Projects />} />
            <Route path={allTabs[2]} render={() => <AboutMe />} />
            <Route path={allTabs[3]} render={() => <Contact />} />
          </Switch>
          <FooterWrapper> <FooterContent /> </FooterWrapper>
        </div>
      </BrowserRouter>
    </Theme>
  );
}