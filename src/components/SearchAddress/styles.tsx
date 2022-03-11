import styled from "styled-components";

export const WrapDiv = styled.div`
  display: flex;
  opacity: 1;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-flow: column nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  background-color: rgb(246, 246, 246);
  width: calc(100%);
  height: 100vh;
  overflow: hidden;
`;
