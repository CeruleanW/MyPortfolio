import React, { lazy } from 'react';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav';
import NavTabs from './components/NavTabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { AnimatePresence } from 'framer-motion';
import Theme from './styles/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './components/ScrollToTop';
import { STATEMENT, PAGEROUTES, PAGETITLES } from './data/globals';
import './styles/App.scss';

// const Projects = lazy(() => import('../components/Project/Projects'));
// const AboutMe = lazy(() => import('../components/AboutMe/AboutMe'));
// const Contact = lazy(() => import('./pages/Contact'));

// Sections
// - Career Goals: Your professional goals for the next five years.
// - Would be nice
//    - References - 3-5 people who can verify your professional qualifications, from faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects

export default function App() {
  console.log(`%cHi! I'm Asher. \nThanks for coming! `, 'background: #222; color: #bada55; font-size: 2.6rem');
  console.log(STATEMENT);
  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <div className={'root-container'}>
          <Nav routes={PAGEROUTES} pageTitles={PAGETITLES}>
            <Route
              path='/'
              render={({ location }) => (
                <>
                  <NavTabs
                    routes={PAGEROUTES}
                    value={location.pathname}
                    pageTitles={PAGETITLES}
                  />
                </>
              )}
            />
          </Nav>
          <main className={'root-main'} >
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch key={location.pathname}>
                    <Route exact path={PAGEROUTES[0]} render={() => <Home />} />
                    <Route
                      path={`${PAGEROUTES[1]}/:id`}
                      render={() => <ProjectDetailPage />}
                    />
                    <Route path={PAGEROUTES[1]} render={() => <Projects />} />
                    <Route path={PAGEROUTES[2]} render={() => <AboutMe />} />
                    <Route path={PAGEROUTES[3]} render={() => <Contact />} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </Theme>
  );
}
