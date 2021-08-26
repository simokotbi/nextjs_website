import styled from "styled-components";

export const Pagesgrid=styled.section`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-gap: 16px;
margin-bottom: 8rem;
padding: 0 1rem;
text-align: center;

`;
export const Img=styled.img`
    background-position: center;
    background-size: cover;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    place-self: center;
`;