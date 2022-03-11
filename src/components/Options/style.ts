import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 360px;
  height: 812px;
  position: fixed;
  top: 0;
`;

export const Options = styled.div<{ show: boolean }>`
  width: 360px;
  height: 500px;
  border-radius: 20px 20px 0 0;
  border: 1px solid #e2e2e2;
  background-color: #f6f6f6;
  z-index: 100;
  position: fixed;
  bottom: 0;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 18px;
  cursor: pointer;
`;

export const Title = styled.h3`
  padding-top: 30px;
  padding-left: 15px;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const OptionsWrapper = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

export const Option = styled.li`
  list-style: none;
  padding: 10px 0 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #e2e2e2;
  }
`;
