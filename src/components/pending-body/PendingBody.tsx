import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { PatientCard } from "../patient-card/PatientCard";

const Body = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 5px #191f4f28;
  border-radius: 8px;
  padding: 6px;
  .section-separator {
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 5px;
    margin-bottom: 13px;
  }
`;

export const PendingBody: FunctionComponent = () => {
  return (
    <Body>
      <p className="section-separator">Upcoming (2)</p>
      <PatientCard />
      <PatientCard />

      <p className="section-separator">Pending (1)</p>
      <PatientCard />
      <p className="section-separator">Cancelled (0)</p>
      <PatientCard empty />
    </Body>
  );
};
