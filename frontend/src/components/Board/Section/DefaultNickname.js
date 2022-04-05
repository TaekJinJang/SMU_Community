import React from "react";
import styled from "styled-components";
import writeIcon from "../../../assets/write.png";

const SubmitButton = styled.li`
  background-color: #c62917;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 38px;
  height: 38px;
`;
const InputIcon = styled.img`
  width: 38px;
  height: 38px;
`;

function CheckNickname({ icon, left, click, submit }) {
  return (
    <>
      <SubmitButton onClick={submit}>
        <InputIcon src={writeIcon} />
      </SubmitButton>
    </>
  );
}

export default CheckNickname;
