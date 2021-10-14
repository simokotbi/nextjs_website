import React from 'react';
import  Layout  from '../src/layout/Layout';
import Hero from '../components/hero/Hero';
import Projects from '../components/Projects-demonstration/Projects';
import Aboutme from '../components/aboutme/Aboutme';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

function HomePage(){
  return ( 
    <Layout>
     <Hero/>
    
     <Aboutme/>
     <Projects/>
     <Skills/>
     <Contact/>
      <Footer/>
     </Layout>
  );
}
export default HomePage;