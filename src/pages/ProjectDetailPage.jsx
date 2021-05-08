import React from 'react';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import Description from '../components/Description';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import data from '../data/projects.json';
import { MetaDataList } from '../components/MetaDataList';

//TODO:
// pics for projects
const { projects } = data;

function Title(props) {
  return (
    <>
      <Typography variant='h1'>{props.children}</Typography>
    </>
  );
}

export function MetaData(props) {
  return (
    <Grid container justify={'space-between'}>
      {props.children}
    </Grid>
  );
}

function getProject(targetId) {
  const result = projects.find(({ id }) => id === targetId);
  return result;
}

function Heading(props) {
  return (
    <div>
      <Typography variant={'h2'}>{props.children}</Typography>
    </div>
  );
}

export default function ProjectDetailPage(props) {
  const { id } = useParams(); //pure item id
  
  //use the project id to find project data
  const projectData = getProject(id);

  const {
    title,
    content,
    live,
    type,
    techs,
    repo,
    illustrations,
  } = projectData;

  let illustrationPaths = [];
  if (illustrations) {
    illustrationPaths = illustrations.map(
      (imgName) => process.env.PUBLIC_URL + '/img/illustrations/' + imgName
    ); // local path
  }

  // render the img by index
  const renderIllustration = (index) => {
    try {
      if (illustrationPaths[index]) {
        return (
          <Box
            maxWidth={1000}
            maxHeigth={1280}
            display='flex'
            justifyContent='center'
          >
            <img
              src={illustrationPaths[index]}
              alt={'illustration'}
              style={{ maxWidth: ' 100%', height: 'auto' }}
            />
          </Box>
        );
      }
    } catch {
      return null;
    }
  };

  return (
    <>
      <Container>
        <Box mt={14}>
          <Title>{title}</Title>
          <Box mt={6} maxWidth={800}>
            <Description>{content.introduction}</Description>
          </Box>
          <Box mt={4} maxWidth={870}>
            <MetaData>
              <MetaDataList label={'Type'} item={type} />
              <MetaDataList label={'Techs'} items={techs} />
              <MetaDataList
                label={'Source Code'}
                item={repo}
                isLink={true}
                linktext={'Repo'}
              />
              <MetaDataList
                label={'Demo'}
                item={live}
                isLink={true}
                linktext={'Visit Site'}
              />
            </MetaData>
          </Box>
        </Box>
        <Box mt={4}>{renderIllustration(0)}</Box>
        <Box mt={6} maxWidth={1024}>
          <Heading>Project Goal</Heading>
          <Box mt={2}>
            <Description>{content.goal}</Description>
          </Box>
        </Box>
        {content.spotlight ? (
          <Box mt={8} maxWidth={1024}>
            <Heading>Spotlight</Heading>
            <Box mt={2}><Description>{content.spotlight}</Description></Box>
          </Box>
        ) : null}
        <Box mt={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              {renderIllustration(1)}
            </Grid>
            <Grid item xs={12} lg={6}>
              <Heading>Problems</Heading>
              <Box mt={5} maxWidth={650}>
                {content.problem.map((p, index) => (
                  <Description key={'para-' + index}>{p}</Description>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mx={'auto'} mt={10} mb={10} maxWidth={1024}>
          <Typography variant={'h2'} align={'center'}>
            Lessons Learned
          </Typography>
          <Box mt={6}>
            {content.lesson.map((p, index) => (
              <Description key={'para-' + index} align={'center'}>
                {p}
              </Description>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
