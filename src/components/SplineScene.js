import styled from "styled-components";
import Room from "../images/playroom.png";

export default function App() {
  return (
    <Wrapper>
      <img src={Room} alt="#" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 100%;
  }

  width: 100%;
  height: 100%;
  min-height: 720px;

  @media (max-width: 560px) {
    min-height: 520px;
  }
`;
