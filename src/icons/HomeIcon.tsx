import { FunctionComponent } from "react";

export const HomeIcon: FunctionComponent<{ color?: string }> = ({
  color = "#fff",
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="7.88877"
      height="10.1108"
      rx="0.5"
      stroke="currentColor"
    />
    <rect
      x="11.6115"
      y="0.5"
      width="7.88877"
      height="5.66648"
      rx="0.5"
      stroke="currentColor"
    />
    <rect
      x="0.5"
      y="13.8331"
      width="7.88877"
      height="5.66648"
      rx="0.5"
      stroke="currentColor"
    />
    <rect
      x="11.6113"
      y="9.38867"
      width="7.88877"
      height="10.1108"
      rx="0.5"
      stroke="currentColor"
    />
  </svg>
);
