import styled from "styled-components";

import { SplitScreen } from './SplitScreen';

const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
const LeftComponent = () => {
  return <h1 style={{ color: "antiquewhite", padding: "0", margin: "0" }}>Left</h1>
}
const RightComponent = () => {
  return <h1 style={{ color: "antiquewhite", padding: "0", margin: "0" }}>Right!</h1>
}

function App() {
  return (
    <ScreenContainer>
      <SplitScreen>
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
    </ScreenContainer>
  );
}

export default App;
