import React from 'react';
import Link from 'next/link';
import { SectionTitle,SectionText,Div } from './HeroStyles';
import { Container } from '../../src/layout/LayoutStyles';

function Hero(){
    return(
        <Container>

<Div>
       <SectionTitle >
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Im kotbi Mohamed Im a Full stack developer with 5 years working experience.

Ive developed PWAs and high performance web pages, also have experience with website optimizations.

For back-end Im using Nodejs with Mongodb, GraphQL APIs,Java,PHP.

Im good at algorithms and data structures.
        </SectionText>
</Div>
</Container>
    );
}
export default Hero;