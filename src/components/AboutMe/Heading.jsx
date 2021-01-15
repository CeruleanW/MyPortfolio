import React from 'react'
import {
  Typography, Box
} from "@material-ui/core";

export default function Heading(props) {
  return (
    <Box mb={2}>
      <Typography variant={"h2"}>{props.children}</Typography>
    </Box>
  )
}
