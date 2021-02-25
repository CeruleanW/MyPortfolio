// include a contact form and your social media channels.
import React from 'react';
import {
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  TextField,
  useMediaQuery,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import SocialMedia from './SocialMedia';
import { useTheme } from '@material-ui/styles';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => {
  const py = theme.spacing(10);
  return {
    textArea: {
      // maxWidth: "90vw",
      width: '100%',
      fontSize: theme.spacing(2.1),
    },
    submit: {
      borderRadius: '0',
      marginTop: theme.spacing(1),
    },
    root: {
      padding: `${py}px ${theme.spacing(8)}px`,
      [theme.breakpoints.up('md')]: {
        padding: `${py}px ${theme.spacing(20)}px`,
      },
      [theme.breakpoints.up('lg')]: {
        padding: `${py}px ${theme.spacing(30)}px`,
      },
    },
  };
});

const SimpleTextField = (props) => {
  const { label, inputRef, name } = props;
  // ref={register}
  return (
    <TextField
      label={label}
      variant='filled'
      margin='normal'
      required
      fullWidth
      color={'secondary'}
      inputRef={inputRef}
      name={name}
    />
  );
};

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //submit data to MailerSend Email API
    const requestOptions = createRequestOption(data);
    console.log(requestOptions);
    await fetch('https://api.mailersend.com/v1/email', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error:', error));
  };

  return (
    <Box maxWidth={1280} className={classes.root}>
      <Typography variant={'h2'} component={'p'}>
        Get in touch?
      </Typography>
      <Typography variant={'h2'} component={'p'}>
        Drop me a line!
      </Typography>
      <Box mt={1}>
        <Typography>
          Are you looking for a developer, or just want to talk? Please feel to
          contact me. free.
        </Typography>
      </Box>
      <Box maxWidth={850} mt={4}>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify='center'>
              <Grid container item spacing={isMobile ? 0 : 4}>
                <Grid item xs={12} sm={6}>
                  <SimpleTextField
                    label='Name'
                    inputRef={register}
                    name={'name'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SimpleTextField
                    label='Email'
                    inputRef={register}
                    name={'email'}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={'Message'}
                  name={'message'}
                  variant='filled'
                  margin='normal'
                  required
                  fullWidth
                  color={'secondary'}
                  multiline={true}
                  rows={5}
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              variant='contained'
              color='primary'
              size='large'
              endIcon={''}
              target='_blank'
              rel='noopener'
              type='submit'
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </Box>
      <Box mt={18} width={120}>
        {/* <Typography>
          Email: yyang.techie#gmail.com {"(Please replace # with @)"}
        </Typography> */}
        <SocialMedia text={''} />
      </Box>
    </Box>
  );
}

function createRequestOption(data) {
  let myHeaders = {};
  Object.assign(myHeaders, {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjI1YjlhZDNiZGViYWY0YzBkY2IyMmFjNzIwZWI4N2EzNDI5MDMzMWJhMGM2MTViMjdmOGM2ZWNhOWNhYTI3NDg4M2U0YzI1YTg2YmY2MGQiLCJpYXQiOjE2MTQyMDYzMjksIm5iZiI6MTYxNDIwNjMyOSwiZXhwIjo0NzY5ODc5OTI5LCJzdWIiOiIyNjUwIiwic2NvcGVzIjpbImVtYWlsX2Z1bGwiXX0.OqE-lpZc8I0SrijQ4KNt0bc6dpO_aepd4dEM9x805BvRvZGrKcj2cNpJVL5Vn-qGffIuhnQCihjOHa1fsuG80INWZi2OYXMZNfCBG4ffu4CJge_97zpXQiN4DOp_fHP-8GuP4-Gn_h8cJr8SDfM8IPY0X6dTI2u9UH_QqzIMRYsJ1Q1hqY1ETzUvVNb9JBYP6WO3FfMGtTBS4eRhATYYeKBYrXWACR6IjaqojphuKnTzyn0t6ObHq1fwDLf4nQh22ENnsxgA-Jr9xe3DAR4_BKc4BYwYobTB2htskLOvFDkDsK6KSnPtLvL2GutlYVGVt2A0KCEx3sUSy0It1CvXsK481zxat51k_U0IP4AlOvoarMI_qfWT1HfLEH-wGz01lvbRaDAA93t-eu-ebtETQP1Kk4933M6p6Azj1SImjszh8xxW2mhQD1QC6yoVFCrfd1I576MriHsneJIcRKVTyiW42J8M6SrDGdbalWezDVj17_VYMzPAqk9NNrA-VmwYFBumypHluY7NSGjBP-69aVltrwCMv8K1jLnnmoNcbECuEuneai1KyvndgTFetT5prQSoJ15ftFkR0dNJBSMbcWGvqfuwPCLiNNIpLKO-7_j-yvf-6KTQpdYwMA8TyDgKkwyIVPs0VBps8VbH9AYvnWwqP9h0mqR75RlW9GTD5j4',
  });
  Object.assign(myHeaders, {'Content-Type': 'application/json'});
  Object.assign(myHeaders, {'Access-Control-Allow-Origin': 'https://yiyangdev.me'});
  // Object.assign(myHeaders, {'Access-Control-Allow-Origin': '*'});
  // myHeaders.append(
  //   'Cookie',
  //   '__cfduid=d18414ef81bb46bb8b038f62e585ee9d81614206647'
  // );

  const message = `This is a message from ${data.name}: \n ${data.message} \n Email: ${data.email}`;
  const raw = JSON.stringify({
    from: { email: 'hello@yiyangdev.me', name: 'MailerSend' },
    to: [{ email: 'yyang.techie@gmail.com', name: 'Yi Yang' }],
    subject: `Contact from portfolio | by ${data.name}`,
    text: message,
    html: `<b>${message}</b>`,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    mode: 'cors',
  };
  return requestOptions;
}
