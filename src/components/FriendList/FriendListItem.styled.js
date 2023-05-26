import styled from 'styled-components';

export const Item = styled.li`
display: flex;
width: 300px;
margin: 5px auto;
padding: 5px 20px;
border: 1px solid #E9E8E8;
box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
width: 20px;
height: 20px;
margin: 15px 10px;
border-radius: 50px;
background-color: ${({ isOnline }) => isOnline ? 'green' : 'red'};
`;

export const Avatar = styled.img`
border: 1px solid #D8C4C4;
border-radius: 15px;
`;

export const Name = styled.p`
margin-left: 20px;
font-weight: 700;
`;