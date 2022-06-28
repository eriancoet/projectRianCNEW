import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title:
      'Christ Vision Network',
    videoLink: 'IT76CAd-OAQ',
    starCount: 5,
    expanded: true,
    list: [
      {
        content:  ( <a target="_blank" href='https://infinite-ridge-58847.herokuapp.com/login' rel="noopener noreferrer">
        Click to open Project
             </a> ) ,
      },
      {
        content: 'Social Network Project for Vision Christ Network. Mern Stack App',
      },
      {
        content: 'Part of a peoject for Christian Social Media',
      },
    ],
  },
  {
    title: 'Fullstack Web Application - ReactJS Game',
    videoLink: 'gVeMD7Y11RE',
    starCount: 4,
    expanded: true,
    list: [
      {
        content:  ( <a target="_blank" href='https://protected-badlands-68828.herokuapp.com/' rel="noopener noreferrer">
        Click to open Project
             </a> ) ,
      },
      {
        content: 'A Memory Game created with ReactJS',
      },
    ],
  },
  {
    title: 'Itunes Search Api',
    videoLink: 'gVeMD7Y11RE',
    starCount: 5,
    expanded: false,
    list: [
      {
        content:  ( <a target="_blank" href='https://fast-earth-93423.herokuapp.com/' rel="noopener noreferrer">
        Click to open Project
             </a> ) ,
      },
      {
        content: 'Itunes API, Search Bar, UI/UX Design, React App',
      },
      {
        content: 'Deployed with Heroku',
      },
    ],
  },
  {
    title: 'Rian C. - Github Account',
    videoLink: 'gVeMD7Y11R',
    starCount: 5,
    expanded: false,
    list: [
      {
        content:  ( <a target="_blank" href='https://github.com/eriancoet' rel="noopener noreferrer">
        Click to open Github
             </a> ) ,
      },
      {
        content: 'My Github Account - Rian C.',
      },
      {
        content: 'The Repositories will become more over time...',
      },
      {
        content: 'Fullstack Web Developer',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="projects" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Video and links to projects"
          heading="Rian's Projects"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
             >
            </PopularCard>
          
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
