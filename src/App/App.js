import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterContent from "../components/Footer/FooterContent";
import Nav from "../components/Nav";
import Section from "../components/Section";
import resumeData from '../components/resumeData';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  // flexContent: {
  //   flex: "1 0 auto",
  // }
});

// Sections
// - Career Goals: Your professional goals for the next five years.
// - Would be nice
//    - References - 3-5 people who can verify your professional qualifications, from faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects




function App() {
  const classes = useStyles();

  function getData(data) { }
  function storeData(key, value) { }
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData('data', state);
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  return (
    <div>
      <Nav />
      <Section />
      {/* <Footer /> */}
      <FooterWrapper> <FooterContent/> </FooterWrapper>
    </div>
  );
}
export default App;