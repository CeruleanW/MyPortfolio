import React, { lazy, useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Nav from './components/organisms/Nav';
import NavTabs from './components/molecules/NavTabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Theme from './styles/base/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './components/atomics/ScrollToTop';
import {
  STATEMENT,
  PAGE_ROUTES,
  PAGE_TITLES,
  PERSONAL_DATA_LINK,
} from './data/globals';
import './styles/main.scss';
import axios from 'axios';
import yaml from 'js-yaml';
import LogRocket from 'logrocket';
import {easterEgg} from './lib/easter-egg';
import { LinearProgress } from '@material-ui/core';

LogRocket.init('5bsway/portfolio');

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const Resume = lazy(() => import('./pages/Resume'));

export default function App() {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    async function foo() {
      const res = await axios.get(PERSONAL_DATA_LINK);
      setDoc(yaml.load(res.data));
    }
    foo();

    easterEgg();
    console.log(STATEMENT);
  }, []);

  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <div className={'root-container'}>
          <Nav routes={PAGE_ROUTES} pageTitles={PAGE_TITLES}>
            <Route
              path='/'
              render={({ location }) => (
                <NavTabs
                  routes={PAGE_ROUTES}
                  value={location.pathname}
                  pageTitles={PAGE_TITLES}
                />
              )}
            />
          </Nav>
          <React.Suspense fallback={<LinearProgress color={'secondary'}/>}>
            <main className={'root-main'}>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch key={location.pathname}>
                      <Route
                        exact
                        path={PAGE_ROUTES[0]}
                        render={() => <Home />}
                      />
                      <Route
                        path={`${PAGE_ROUTES[1]}/:id`}
                        render={() => <ProjectDetailPage />}
                      />
                      <Route
                        path={PAGE_ROUTES[1]}
                        render={() => <Projects />}
                      />
                      <Route path={PAGE_ROUTES[2]} render={() => <AboutMe />} />
                      <Route path={PAGE_ROUTES[3]} render={() => <Contact />} />
                      {doc ? (
                        <Route
                          path={PAGE_ROUTES[4]}
                          render={() => (
                            <Resume {...doc.names} {...doc.resume} />
                          )}
                        />
                      ) : null}
                    </Switch>
                  </AnimatePresence>
                )}
              />
            </main>
            <Footer />
            <ScrollToTop />
          </React.Suspense>
        </div>
      </BrowserRouter>
    </Theme>
  );
}
