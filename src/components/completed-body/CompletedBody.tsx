import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { PatientCard } from "../patient-card/PatientCard";

const Body = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 5px #191f4f28;
  border-radius: 8px;
  padding: 6px;
  height: calc(100% - 78px);
  align-self: stretch;
  .section-separator {
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 5px;
    margin-bottom: 13px;
  }
`;

const HoveringCard = styled.div`
  background-color: white;
  box-shadow: 0 0 5px #00000025;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  margin-bottom: 11px;
`;

export const CompletedBaody: FunctionComponent = () => {
  return (
    <Body>
      <p className="section-separator">Checked Out (1) </p>
      <PatientCard />
    </Body>
  );
};
