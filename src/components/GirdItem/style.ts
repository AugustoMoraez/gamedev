import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 100%;
    padding: 15px;
    border-radius: 5px;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    transition: all 0.5s ease 0s;
  &:hover{
    cursor: pointer;
    box-shadow: 2px 0px 20px #333;
  }
  
`;

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content:left;
  flex-direction: column;
  align-items: left;
  padding: 5px;
  h1{
    font-size: 20px;
    font-weight: 500;
  }
  p{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  span{
    font-weight: 200;
    font-size: 13px;
  }
  button{
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color:#007BFF;
    cursor: pointer;
  }
  svg{
    margin-top: 2px;
  }
`;
