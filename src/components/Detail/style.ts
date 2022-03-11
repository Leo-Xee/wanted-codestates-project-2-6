import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 32px 16px;
`;

export const AppDetail = styled.h3`
  width: 288px;
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const CareType = styled.div`
  height: 56px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  > h5 {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  > div {
    border-bottom: 1px solid #f6f6f6;
    height: 52px;
    font-size: 14px;
    font-weight: 400;
    padding: 16px 0;
  }
`;

export const CareShedule = styled.div`
  border-bottom: 1px solid #f6f6f6;
  margin-top: 16px;
  > h5 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  > div {
    > div {
      height: 20px;
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;

export const Address = styled.div`
  margin-top: 16px;
  > h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  > div {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;

export const DetailAddress = styled.div`
  display: flex;
  align-items: center;
  > p {
    width: 35px;
    height: 20px;
    font-size: 10px;
    line-height: 20px;
    font-weight: 700;
    border-radius: 32px;
    text-align: center;
    color: #7d7878;
    background: #7d78781a;
  }
  > span {
    width: 253px;
    font-size: 12px;
    line-height: 18px;
    color: #7d7878;
  }
`;
