import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Banner from 'sections/banner';
import CtaOne from 'sections/cta-one';
import FAQ from 'sections/contact';
import CtaTwo from 'sections/cta-two';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/education';
import PopularCourse from 'sections/popular-projects';
import CtaThree from 'sections/cta-three';
import FavoriteCourse from 'sections/favorite-projects';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="My Portfolio for Fullstack Web Development - Rian Coetzee "
              title="Fullstack Web Developer Portfolio - Rian C."
            />
            <Banner />
            <FavoriteCourse />
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            <Pricing />
            <CtaTwo />
            <FAQ />
            <CtaOne />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
