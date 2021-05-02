import React, { lazy, useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav';
import NavTabs from './components/NavTabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import { AnimatePresence } from 'framer-motion';
import Theme from './styles/base/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollToTop from './components/ScrollToTop';
import {
  STATEMENT,
  PAGE_ROUTES,
  PAGE_TITLES,
  PERSONAL_DATA_LINK,
} from './data/globals';
import './styles/main.scss';
import axios from 'axios';
import yaml from 'js-yaml';
import Resume from './pages/Resume';

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
  const [doc, setDoc] = useState(null);
  // const doc = useRef();

  useEffect(() => {
    async function foo() {
      const res = await axios.get(PERSONAL_DATA_LINK);
      setDoc(yaml.load(res.data));
      // doc.current = yaml.load(res.data);
    }
    foo();

    easterEgg();
    console.log(STATEMENT);
  }, []);

  return (
    <Theme>
      <CssBaseline />
      <React.Suspense fallback={<LinearProgress />}>
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
          </div>
        </BrowserRouter>
      </React.Suspense>
    </Theme>
  );
}
