import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
  border: 1px solid #ddd;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  background-color: #d7ecff;
  color: #191f4f;
  font-weight: normal;
`;

const Styled2ndTh = styled.th`
  border: 1px solid #ddd;
  padding: 16px;
  text-align: left;
  font-weight: bold;
  background-color: #b2d1ff;
  text-transform: uppercase;
  color: #003c83;
`;

const getRandomColor = () => {
  const colors = ["#d4f7dc", "#ffebcc", "#f8d7da"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getBorderColor = (backgroundColor: string) => {
  switch (backgroundColor) {
    case "#d4f7dc":
      return "rgba(0, 128, 0, 0.7)"; // green
    case "#ffebcc":
      return "rgba(255, 165, 0, 0.7)"; // orange
    case "#f8d7da":
      return "rgba(255, 0, 0, 0.7)"; // red
    default:
      return "transparent";
  }
};

const StyledTd = styled.td<{ backgroundColor: string }>`
  border: ${() => (Math.random() > 0.5 ? "none" : "1px solid #ddd")};
  padding: 16px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  border-left: ${(props) => {
    if (Math.random() > 0.5) {
      return "none";
    }
    const borderColor = getBorderColor(props.backgroundColor);
    return `5px solid ${borderColor}`;
  }};
`;

const PatientDetailsTd = styled.td`
  border: 1px solid #ddd;
  padding: 16px;
  color: var(--tertiary-blue);
  font-weight: bold;
  text-align: left;
  background-color: #d6e4ff;

  p {
    margin: 4px 0;
  }

  span {
    display: block;
    font-size: 0.9em;
    color: #999;
    font-weight: normal;
  }
`;

const EmptyRow = styled.tr`
  height: 50px;
  background-color: transparent;
`;

const TrackerTable = () => {
  const patients = [
    { name: "Albert Flores", mrn: "AB12345", sex: "♂ 34Y" },
    { name: "Kristin Watson", mrn: "AB12345", sex: "♀ 34Y" },
    { name: "Brooklyn Simmons", mrn: "AB12345", sex: "♂ 34Y" },
    { name: "Leslie Alexander", mrn: "AB12345", sex: "♀ 34Y" },
    { name: "Alex", mrn: "AB12345", sex: "♂ 34Y" },
  ];

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh colSpan={4}>CONSULTATION</StyledTh>
            <StyledTh colSpan={4}>DIAGNOSTICS</StyledTh>
            <StyledTh colSpan={2}>POST CONSULTATION</StyledTh>
          </tr>
          <tr>
            <Styled2ndTh>Patient details</Styled2ndTh>
            <Styled2ndTh>Pre-assessment</Styled2ndTh>
            <Styled2ndTh>Waiting area</Styled2ndTh>
            <Styled2ndTh>Consultation Room</Styled2ndTh>
            <Styled2ndTh>Billing Counter</Styled2ndTh>
            <Styled2ndTh>Service Area-1</Styled2ndTh>
            <Styled2ndTh>Service Area-2</Styled2ndTh>
            <Styled2ndTh>Service Area-3</Styled2ndTh>
            <Styled2ndTh>Follow-up bay</Styled2ndTh>
            <Styled2ndTh>Prescription</Styled2ndTh>
          </tr>
        </thead>
        <tbody>
          {patients.slice(0, 3).map((patient, index) => (
            <tr key={index}>
              <PatientDetailsTd>
                <p>{patient.name}</p>
                <span>MRN: {patient.mrn}</span>
                <span>{patient.sex}</span>
              </PatientDetailsTd>
              {[...Array(9)].map((_, i) => {
                const backgroundColor = getRandomColor();
                return (
                  <StyledTd key={i} backgroundColor={backgroundColor}>
                    {String.fromCharCode(65 + index * 9 + i)}
                  </StyledTd>
                );
              })}
            </tr>
          ))}
          <EmptyRow>
            <td colSpan={10}></td>
          </EmptyRow>
          {patients.slice(3).map((patient, index) => (
            <tr key={index + 3}>
              <PatientDetailsTd>
                <p>{patient.name}</p>
                <span>MRN: {patient.mrn}</span>
                <span>{patient.sex}</span>
              </PatientDetailsTd>
              {[...Array(9)].map((_, i) => {
                const backgroundColor = getRandomColor();
                return (
                  <StyledTd key={i} backgroundColor={backgroundColor}>
                    {String.fromCharCode(65 + (index + 3) * 9 + i)}
                  </StyledTd>
                );
              })}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TrackerTable;
