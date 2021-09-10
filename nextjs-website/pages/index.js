import React from 'react';
import  Layout  from '../src/layout/Layout';
import Hero from '../components/hero/Hero';
import Pages from '../components/pages-demonstration/Pages';
import Projects from '../components/projects/Projects';

function HomePage(){
  return (
    <Layout>
     <Hero/>
    
     <Projects/>
     <Pages/>
     </Layout>
  );
}
export default HomePage;