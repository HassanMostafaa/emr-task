import React, { FunctionComponent } from "react";
import styled from "styled-components";

// Define the styled component for the title
const Title = styled.p`
  /* Add your styles here */
  padding: 17px;
  background-color: var(--secondary-light-blue);
  color: #000;
  border-radius: 20px 20px 0 0;
  margin-top: 20px;
`;

interface SubCompTitleProps {
  title: string;
}

export const SubCompTitle: FunctionComponent<SubCompTitleProps> = ({
  title,
}) => {
  return <Title>{title}</Title>;
};
