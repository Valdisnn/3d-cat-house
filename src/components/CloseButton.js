import React from "react";
import styled from "styled-components";

import ButtonImage from "../images/close-button.webp";

function CloseButton() {
  return (
    <Wrapper className="closeButton">
      <Image src={ButtonImage} alt="close-button" />
    </Wrapper>
  );
}

export default CloseButton;

const Wrapper = styled.div`
  position: absolute;
  width: 91px;
  height: 113px;
  z-index: 2;
`;

const Image = styled.img`
  width: 91px;
  height: 113px;
  margin: 0;
`;
