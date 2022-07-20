import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: 'Contact Rian C.',
    contents: (
      <div>
       <p>eriancoet@gmail.com</p>

        <p>0799533275</p>

       <p>Sabie, Mpumalanga, South Africa</p> 
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Other Links',
    contents: (
      <div>
        <p>   <a target="_blank" href='https://eriancoet.github.io/RianC/' rel="noopener noreferrer">
       Portfolio 
             </a> 
             
            </p>
     
       <p>
       <a target="_blank" href='https://github.com/eriancoet' rel="noopener noreferrer">
       Github Account - Rian
             </a> 
        </p> 
        <p>
        <a target="_blank" href='https://www.facebook.com/rian.coetzee.7/' rel="noopener noreferrer">
      Facebook - Rian C.
             </a> 
        </p>
      <p>
      <a target="_blank" href='https://www.linkedin.com/in/rian-coetzee-865337218/' rel="noopener noreferrer">
        LinkedIn
              </a>
        </p> 
            
           
      </div>
    ),
 
 
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Contact Me"
          heading="If you want to contact me..."
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
