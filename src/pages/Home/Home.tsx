import React from "react";

import * as S from "./style";

type HomeProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Home({ setRoute }: HomeProps) {
  const handleClickBtn = () => {
    setRoute("apply");
  };
  return (
    <S.Container>
      <S.Title>
        어르신 돌보미
        <br />
        <strong>케어코디</strong>
      </S.Title>
      <h1></h1>
      <S.Button onClick={handleClickBtn}>신청하기</S.Button>
    </S.Container>
  );
}

export default Home;
