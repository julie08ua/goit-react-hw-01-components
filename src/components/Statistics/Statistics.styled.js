import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
margin-top:30px;
width: 400px;
border-radius: 15px;
text-align: center;
border: 1.5px solid grey;
overflow: hidden;
background-color: #FFF7F7;
`;

export const Title = styled.h2`
padding:20px 0;
font-size: 40px;
font-weight: 700;
margin:0;
color: #525050;
`;

export const StatList = styled.ul`
display: flex;
margin: 0;
padding:0;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
width: 100px;
padding: 20px 0;
color: #ffffff;
`;

export const Label = styled.span`
margin: 5px;
`;

export const Percentage = styled.span`
font-size: 20px;
`;