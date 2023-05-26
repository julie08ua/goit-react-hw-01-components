import styled from 'styled-components';

export const ProfileWrapper = styled.div`
margin: 40px auto 0;
width: 400px;
border-radius: 15px;
text-align: center;
border: 1.5px solid grey;
overflow: hidden;
`;

export const Description = styled.div`
padding: 50px 0;
background-color: #FFF7F7;
`;

export const Avatar = styled.img`
border-radius: 50%;
width: 200px;
border: 1.5px solid grey;
`;

export const Name = styled.p`
font-size: 40px;
font-weight: 700;
margin:0;
padding: 5px 0;
`;

export const Tag = styled.p`
font-size: 28px;
font-weight: 500;
color: grey;
margin:0;
padding: 5px 0;
`;

export const Location = styled.p`
font-size: 28px;
font-weight: 500;
color: grey;
margin:0;
padding: 5px 0;
`;

export const Stats = styled.ul`
display: flex;
justify-content: space-around;
list-style: none;
margin:0;
padding: 30px 0;
border-top: 1.5px solid grey;
background-color: rgb(232, 232, 232);
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
`;

export const Label = styled.span`
font-size: 20px;
font-weight: 600;
color: grey;
`;

export const Quantity = styled.span`
font-size: 25px;
font-weight: 800;
`;

