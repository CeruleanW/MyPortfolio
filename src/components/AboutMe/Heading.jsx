import React from 'react'
import {
  Typography
} from "@material-ui/core";

export default function Heading(props) {
  return (
    <Typography variant={"h2"}>{props.children}</Typography>
  )
}
