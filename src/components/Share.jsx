import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";
import { Box } from "@material-ui/core";


//github, linkedin, facebook
export default function Share(props) {
  const {text} = props;
  const iconSize = 26;
  const shareUrl = window.location.href;

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <LinkedinShareButton subject={text} url={shareUrl}>
        <LinkedinIcon size={iconSize} round={true} />
      </LinkedinShareButton>
      <EmailShareButton subject={text} url={shareUrl}>
        <EmailIcon size={iconSize} round={true} />
      </EmailShareButton>
      <FacebookShareButton quote={text} url={shareUrl}>
        <FacebookIcon size={iconSize} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton title={text} url={shareUrl}>
        <WhatsappIcon size={iconSize} round={true} />
      </WhatsappShareButton>
    </Box>
  );
}