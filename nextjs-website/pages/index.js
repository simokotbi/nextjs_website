import React from 'react';
import  Layout  from '../src/layout/Layout';
import Hero from '../components/hero/Hero';
import Pages from '../components/pages-demonstration/Pages';
function HomePage(){
  return (
    <Layout>
     <Hero/>
     <Pages/>
     </Layout>
  );
}
export default HomePage;