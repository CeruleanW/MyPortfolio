import React from "react";
import {
  Typography,
  Box,
} from "@material-ui/core";
import Heading from './Heading';

export default function MyStory(props) {
  return (
    <>
      <Heading>My Story</Heading>
      <Box mt={2}>
        <Typography gutterBottom>
          I'm a 30 year old (TO-BE) Fullstack Web Developer. As an introvert
          person, I enjoy reading and writing, both code & non-code.
        </Typography>
        <Typography gutterBottom>
          After the years spent on marketing and content writing, coding
          relights my passion and I decided to dive into it without turning
          around, so I came to Toronto, Canada, for starting a second student
          life.
        </Typography>
        <Typography gutterBottom>
          In my more than two years study in York University for the Honor's
          degree, I learned Java, JavaScript, as well as Object-Oriented
          Programming, System Design and many other things in Software
          Development. Just as the life itself, it turned out programming is not
          a paved path with beautiful flowers and sunshine. Nevertheless, I am
          dedicated to accept any possible challenge on this path.{" "}
        </Typography>
        <Typography>
          As a recent graduate, I’m seeking a full-time developer role where I
          can work with senior developers and designers to raise my standards
          for software programming. I may not be young as my other counterparts,
          my desire for learning more is not less than any of them.
        </Typography>
      </Box>
    </>
  );
}
