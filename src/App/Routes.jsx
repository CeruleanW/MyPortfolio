// import React from "react";
// import Home from "../components/Home/Home";
// import Projects from "../components/Project/Projects";
// import AboutMe from "../components/AboutMe/AboutMe";
// import Contact from "../components/Contact/Contact";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { Switch, Route, Redirect, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// export default function Routes(props) {
//   const { allTabs } = props;
//   const location = useLocation();
//   return (
//     <div>
//       <AnimatePresence exitBeforeEnter initial={false}>
//         <Switch key={location.pathname} location={location}>
//           <Route exact path={allTabs[0]} render={() => <Home />} />
//           <Route path={allTabs[1]} render={() => <Projects />} />
//           <Route path={allTabs[2]} render={() => <AboutMe />} />
//           <Route path={allTabs[3]} render={() => <Contact />} />
//         </Switch>
//       </AnimatePresence>
//     </div>
//   );
// }
