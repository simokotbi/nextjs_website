import styled from "styled-components";
export const Btncontainer=styled.div`
position: fixed;
  top: 100px;
  right: 16px;
  z-index: 2999;
`;
export const Togglebtn=styled.button`

    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props=>props.theme.colors.colorBorder2};
    color: ${props=>props.theme.colors.colorLinkgris};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`; 