import React from "react";

type HomeProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

function Home({ setRoute }: HomeProps) {
  return <div>Home</div>;
}

export default Home;
