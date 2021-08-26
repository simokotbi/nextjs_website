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
          Our Website
        </SectionTitle>
        <SectionText>
        Im kotbi Mohamed Im a Full stack developer with 5 years working experience.

        </SectionText>
</Div>
</Container>
    );
}
export default Hero;