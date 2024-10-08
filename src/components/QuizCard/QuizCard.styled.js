import styled from "styled-components";

const getBorderColor = ({level, theme} )=>{
 switch (level) {
        case "beginner":
            return theme.colors.green;
        case "intermediate":
            return theme.colors.orange;
        case "advanced":
            return theme.colors.red;
        default:
            return null;
}
};

export const Wrapper = styled.div`
padding:${p=> p.theme.spacing(2)};
border: 1px solid ${getBorderColor};

border-radius: ${p =>p.theme.radii.small};
`;

export const Topic = styled.h2`
margin-top:0;
margin-bottom: ${p => p.theme.spacing(3)};
`;

export const MetaWrapper = styled.div`
display:flex;
gap: ${p=>p.theme.spacing(2)};
`;

export const MetaText = styled.p`
margin:0;

color: ${p => { 
    return p.color;
}}
`;

export const Button = styled.button`
padding: ${p=>p.theme.spacing(1)};
margin: 0;
border: none;

:hover {
color: green;
background-color: blue;}

color: darkblue;
span {
margin-left: 4px;}

svg{
display: block;}
`;