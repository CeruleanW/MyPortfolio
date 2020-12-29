import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

});

//github, linkedin, facebook

export default function SocialMedia(props) {
  const github = props.github;
  const linkedin = props.linkedin;
  const facebook = props.facebook;

  const [count, setCount] = useState(0);

  return (
    <section>
    </section>
  );
}