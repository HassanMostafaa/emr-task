import React, { FunctionComponent } from "react";
import styled from "styled-components";

// Define the styled component for the title
const Title = styled.p`
  /* Add your styles here */
`;

interface SubCompTitleProps {
  title: string;
}

export const SubCompTitle: FunctionComponent<SubCompTitleProps> = ({
  title,
}) => {
  return <Title>{title}</Title>;
};
