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

export const InProgressBody: FunctionComponent = () => {
  return (
    <Body>
      <p className="section-separator">ConsultationRoom 1</p>
      <PatientCard />

      <HoveringCard>Exam Room #2 Available</HoveringCard>
      <HoveringCard>Exam Room #3 Available</HoveringCard>
      <HoveringCard>Exam Room #4 Available</HoveringCard>
    </Body>
  );
};
