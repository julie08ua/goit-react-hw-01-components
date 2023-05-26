import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.table`
margin:30px auto;
width: 400px;
border-radius: 15px;
text-align: center;
border: 1.5px solid #000000;
overflow: hidden;
background-color: #FFF7F7;
 border-collapse: collapse;
 table-layout: fixed;

thead{
    background-color: #83B1FF;
}

th{
    padding: 15px;
    font-size: 20px;
    border: 1px solid #2a2a2a;
    text-transform:uppercase;
}

td{
    padding: 10px;
    border: 1px solid #2a2a2a;
    
}

tr:nth-child(even) {
    background-color: #DEDFE1;
  }
`;