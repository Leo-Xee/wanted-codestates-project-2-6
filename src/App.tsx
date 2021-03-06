import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { page } from "./constant/index";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Complete from "./pages/Complete";
import { StaticProvider } from "./contexts/StaticContext";
import { ApplicationProvider } from "./contexts/ApplicationContext";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [route, setRoute] = useState(page.HOME);

  return (
    <StaticProvider>
      <ApplicationProvider>
        <GlobalContainer>
          {route === page.HOME && <Home setRoute={setRoute} />}
          {route === page.APPLY && <Apply setRoute={setRoute} />}
          {route === page.COMPLETE && <Complete setRoute={setRoute} />}
        </GlobalContainer>
      </ApplicationProvider>
    </StaticProvider>
  );
}

export default App;
