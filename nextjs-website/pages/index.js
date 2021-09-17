import React from 'react';
import  Layout  from '../src/layout/Layout';
import Hero from '../components/hero/Hero';
import Pages from '../components/pages-demonstration/Pages';
import Aboutme from '../components/aboutme/Aboutme';

function HomePage(){
  return (
    <Layout>
     <Hero/>
    
     <Aboutme/>
     <Pages/>
     </Layout>
  );
}
export default HomePage;