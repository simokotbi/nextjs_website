import styled from "styled-components";

export const Contactform=styled.div`
background-color: #fff;
margin: 0 auto;
padding: 1rem;
text-align: center;
padding: 2rem 1rem;
max-width: 600px;
border-radius: 6px;
box-shadow:0 4px 8px rgba(0,30,84,0.12);

`;
export const ContformContainer=styled.div`
padding: 80px 0;

`;
export const Form = styled.form`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family:${props=>props.theme.fonts.secondary};
font-size: 18px;
`;
export const Input=styled.input`
border:none;
max-width: 350px;
width:100%;
text-align: center;
color: #000;
margin: 8px 5px;
padding: .8rem;
border-bottom: 1px solid #eee;
`;
export const Textarea=styled.textarea`
border:none;
color: red;
max-width: 350px;
text-align: center;
width:100%;
padding: 1.4rem;
border-bottom: 1px solid #eee;
`;
export const Button=styled.button`
max-width: 350px;
text-align: center;
width:100%;
margin: 8px 5px;
padding: .8rem;
color: #fff;
background-color: #32beef;
border:none ;
cursor: pointer;
box-shadow: rgb(0 196 255 / 90%) 0px 13px 19px -6px;
`;
export const Polindron=styled.div`
clip-path: polygon(0% 14%, 100% 0px, 100% 84%, 0px 100%);
/* padding: 8rem 1rem 7rem; */
`;