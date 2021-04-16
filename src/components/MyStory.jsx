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
          I grew up in China and I came across the sea to Toronto in 2018. With a dream to be in a part of software development,I started my study as an international student in Canada.
        </Typography>
        <Typography gutterBottom>
        I have worked in the Marketing area for around 3 years. When I was working at the website builder tool provider, NiceNic, I was required to learn about how the website runs. During that experience, I found my passion for those information technologies. The magic of coding kindled my passion and I decided to dive into it without turning around.
        </Typography>
        <Typography gutterBottom>
          In my more than two years study in York University for the Honour's
          degree, I learned Java, JavaScript, as well as Object-Oriented
          Programming, System Design and architecture in Software
          Development. Just as the life itself, it turned out programming is not
          a paved path with beautiful flowers and sunshine. Nevertheless, I am
          dedicated to accept any possible challenge on this path.
        </Typography>
        <Typography>
          As a recent graduate, I’m seeking a full-time web developer role where I
          can work with senior developers and designers to raise my standards
          for software programming. I may not be young as my other counterparts,
          my desire for learning more is not less than any of them.
        </Typography>
      </Box>
    </>
  );
}
