import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import FavoriteCard from 'components/favorite-card';

import fevCardImageOne from 'assets/fev-course-1-1.png';
import fevCardImageTwo from 'assets/fev-course-1-2.png';
import fevCardImageThree from 'assets/fev-course-1-3.png';
import fevCardImageFour from 'assets/fev-course-1-4.png';
import fevCardImageFive from 'assets/fev-course-1-5.png';
import fevCardImageSix from 'assets/fev-course-1-6.png';

import { Swiper, SwiperSlide } from 'swiper/react';

const favoriteCourseData1 = [
  {
    title:  ( <a target="_blank" href='https://protected-badlands-68828.herokuapp.com/' rel="noopener noreferrer">
    ReactJS - Memory Game
         </a> ),
    image: fevCardImageOne,
   
  },
  {
    title: ( <a target="_blank" href='https://fast-earth-93423.herokuapp.com/' rel="noopener noreferrer">
    Itunes Search App
         </a> ),
    image: fevCardImageTwo,
  },
  {
    title:
    ( <a target="_blank" href='https://infinite-ridge-58847.herokuapp.com/login' rel="noopener noreferrer">
        Social Network
             </a> ) , 
    image: fevCardImageThree,
  },
];
const favoriteCourseData2 = [
 
  {
    title:  ( <a target="_blank" href='https://eriancoet.github.io/RianC/' rel="noopener noreferrer">
    Digital Markteting - My Portfolio
         </a> ),
    image: fevCardImageFour,
  },
  {
    title:  ( <a target="_blank" href='https://eriancoet.github.io/RianC/' rel="noopener noreferrer">
    Graphic Design and Video Production
         </a> ), 
    image: fevCardImageFive ,
  },
  {
    title:( <a target="_blank" href='https://github.com/eriancoet' rel="noopener noreferrer">
    My Github Account
         </a> ) ,
    image: fevCardImageSix,
  },
  
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" id="projects" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
    
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Portfolio"
          heading="Web Development and Digital Design"
        />
      
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData1.map((course, index) => (
            <SwiperSlide key={index}>
             
              <FavoriteCard
               
                title={course.title}
                image={course.image}
              
              
              />              
            </SwiperSlide>
            
          ))}
        </Swiper>

        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData2.map((course, index) => (
            <SwiperSlide key={index}>
             
              <FavoriteCard
               
                title={course.title}
                image={course.image}
             
             
              />
              
              
            </SwiperSlide>
            
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
