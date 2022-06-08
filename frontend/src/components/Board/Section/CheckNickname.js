import React, { Children } from "react";
import styled from "styled-components";
import writeIcon from "../../../assets/write.png";
import uncheckWriter from "../../../assets/writer.png";
import checkWriter from "../../../assets/writeractive.png";
import { Button } from "react-bootstrap";

const CheckButton = styled.li`
  position: absolute;
  bottom: 0px;
  width: 38px;
  height: 38px;
  left: ${(props) => props.left || "10px"};
`;
const SubmitButton = styled.li`
  background-color: #c62917;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 38px;
  height: 38px;
`;
const VoiceButton = styled.div`
  position: absolute;
  bottom: 0px;
  right: 80px;
  width: 90px;
  height: 38px;
`;
const InputIcon = styled.img`
  width: 38px;
  height: 38px;
`;

function CheckNickname({ icon, left, click, submit, children }) {
  return (
    <>
      <CheckButton left={left} onClick={click}>
        {icon && <InputIcon src={checkWriter} />}
        {!icon && <InputIcon src={uncheckWriter} />}
      </CheckButton>
      <SubmitButton onClick={submit}>
        <InputIcon src={writeIcon} />
      </SubmitButton>
      <VoiceButton>{children}</VoiceButton>
    </>
  );
}

export default CheckNickname;
