import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 30px;

  strong {
    color: #ff8450;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  font-size: 1.8rem;
  padding: 10px 50px;
  border-radius: 30px;
  background-color: #ff8450;
  color: #f6f6f6;
`;
