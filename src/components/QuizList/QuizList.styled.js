import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap:${p=> p.theme.spacing(3)};
`;

export const ListItem = styled.li`
// width: 300px;
flex-grow:1;
`;