import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
  {
    name: 'Education',
    description: 'Hyperiondev - Fullstack Web Development Bootcamp',
    buttonText: 'Connect with LinkedIn',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'HTML, CSS, JavaScript, ReactJS, Node, express, MongoDB, nextJS, Bootstrap',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Agile Development',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'E-commerce web building, React Application, Mern Stack Development',
        isAvailable: true,
      },
    
    ],
  },
  {
    header: 'Working Experience',
    name: 'Ibis New Media',
    description: 'Web Design/Video Editor',
   
    buttonText: 'Connect with LinkedIn',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '2014 - ongoing',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Story boarding, Shooting, Editing videos, Designing Websites with wordpress, Dreamweaver and Joomla, and Graphic Designing.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Adobe Suite, HTML, CSS, JavaScript, Joomla, Shopify, Wordpress and some other technologies',
        isAvailable: true,
      },
    ],
  },
];

const pricingYearlyData = [
  {
    name: 'Other Education',
    description: 'Certifications',
    buttonText: 'Connect with LinkedIn',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Google, 2021 - 2021, Certification for Digital Marketing',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Multi-Media Tech, 2000, Multi-Media Studies',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Hirt & Carter, 1999, Dtp and Graphic Design',
        isAvailable: true,
      },
     
  
    ],
  },
  {
    header: 'Work History',
    name: 'Manager',
    description: 'the African Elephant Restaurant',
    buttonText: 'Connect with LinkedIn',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '2016 till now',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Managing a Restaurant in South Africa',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Social Media, Managing Staff and Web Design',
        isAvailable: true,
      },
   
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Rian C."
          heading="Resume"
        />
        <Box sx={styles.pricing.btnWrap}>
          <Box as="ul" sx={styles.pricing.btnUl}>
            <Box
              as="li"
              className={` ${plan === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              Fullstack Web Development
            </Box>
            <Box
              as="li"
              className={` ${plan === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              Other 
            </Box>
          </Box>
        </Box>

        <Grid sx={styles.pricing.wrapper}>
          {plan === true
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};
