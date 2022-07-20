import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title:
      'Christ Vision Network',
    videoLink: 'IT76CAd-OAQ',
   
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
    title: 'More links',
    videoLink: 'ERcAk-5GVCk',
    
    expanded: false,
    list: [
      {
        content:  ( <a target="_blank" href='https://github.com/eriancoet' rel="noopener noreferrer">
        My Github Account
             </a> ) ,
      },
      {
        content:  ( <a target="_blank" href='https://eriancoet.github.io/RianCoetzee_Portfolio/' rel="noopener noreferrer">
        My Portfolio (another site)
             </a> ),
      },
      {
        content:  ( <a target="_blank" href='https://still-river-2752.bss.design/' rel="noopener noreferrer">
        The African Elephant Restaurant
             </a> ),
      },
      {
        content: ( <a target="_blank" href='https://www.linkedin.com/in/rian-coetzee-865337218/' rel="noopener noreferrer">
        My LinkedIn Profile
             </a> ),
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="video" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Video and links to projects"
          heading="Videos"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
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
