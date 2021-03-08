import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavTabs from '../components/NavTabs';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Projects from '../components/Project/Projects';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import Theme from '../components/Theme';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Routes from "./Routes";
import ProjectDetailPage from './../components/ProjectDetailPage/ProjectDetailPage';
import ScrollToTop from './ScrollToTop';
import { CONSTANTS } from '../data/globals';

// Sections
// - Career Goals: Your professional goals for the next five years.
// - Would be nice
//    - References - 3-5 people who can verify your professional qualifications, from faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects

const { FULLNAME } = CONSTANTS;
//Routing tabs
const allTabs = ['/', '/projects', '/aboutme', '/contact'];
const pageTitles = ['Home', 'Projects', 'About me', 'Contact'];

export default function App() {
  // States
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  // Data?
  function getData(data) {}
  function storeData(key, value) {}

  useEffect(() => {
    storeData('data', state);
    const date = state.map((obj) => obj.date);
    const bmi = state.map((obj) => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  // Statement of Originality: A paragraph stating that this is your work and that it is confidential. also indicate if any parts of the portfolio should not be copied.
  const statementOfOriginality = `This portfolio is the work of ${FULLNAME}. Please do not copy without permission. Some of the exhibits, work samples, and/or service samples are the proprietary property of the organization whose name appears on the document. Each has granted permission for this product to be used as a demonstration of my work`;
  console.log(statementOfOriginality);

  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <div className='App' style={{ minHeight: `calc(100vh - 56px)` }}>
          <Nav routes={allTabs} pageTitles={pageTitles}>
            <Route
              path='/'
              render={({ location }) => (
                <>
                  <NavTabs
                    routes={allTabs}
                    value={location.pathname}
                    pageTitles={pageTitles}
                  />
                </>
              )}
            />
          </Nav>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch key={location.pathname}>
                  <Route exact path={allTabs[0]} render={() => <Home />} />
                  <Route
                    path={`${allTabs[1]}/:id`}
                    render={() => <ProjectDetailPage />}
                  />
                  <Route path={allTabs[1]} render={() => <Projects />} />
                  <Route path={allTabs[2]} render={() => <AboutMe />} />
                  <Route path={allTabs[3]} render={() => <Contact />} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </div>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </Theme>
  );
}
