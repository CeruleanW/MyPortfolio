import React, { lazy, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav';
import NavTabs from './components/NavTabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import Theme from './styles/base/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './components/ScrollToTop';
import { STATEMENT, PAGEROUTES, PAGETITLES } from './data/globals';
import './styles/main.scss';
import axios from 'axios';
import {PERSONAL_DATA_LINK} from './data/globals';
import yaml from 'js-yaml';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

// Sections
// - Career Goals: Your professional goals for the next five years.
// - Would be nice
//    - References - 3-5 people who can verify your professional qualifications, from faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects

const easterEgg = () => {
  console.log(
    `%cHi! I'm Asher. \nThanks for coming! `,
    'background: #222; color: #bada55; font-size: 2.6rem'
  );
};

export default function App() {
  easterEgg();
  console.log(STATEMENT);

  useEffect( () => {
    async function foo() {
      const res = await axios.get(PERSONAL_DATA_LINK);
      const doc = yaml.load(res.data);
      console.log(JSON.stringify(doc));
    }

    foo();
  });

  return (
    <Theme>
      <CssBaseline />
      <React.Suspense fallback={<LinearProgress />}>
        <BrowserRouter>
          <div className={'root-container'}>
            <Nav routes={PAGEROUTES} pageTitles={PAGETITLES}>
              <Route
                path='/'
                render={({ location }) => (
                  <NavTabs
                    routes={PAGEROUTES}
                    value={location.pathname}
                    pageTitles={PAGETITLES}
                  />
                )}
              />
            </Nav>
            <main className={'root-main'}>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch key={location.pathname}>
                      <Route
                        exact
                        path={PAGEROUTES[0]}
                        render={() => <Home />}
                      />
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
      </React.Suspense>
    </Theme>
  );
}
