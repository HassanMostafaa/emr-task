import { FunctionComponent } from "react";
import { SCompTitle } from "./styles/SCompTitle";

export const CompTitle: FunctionComponent<{
  title: string;
  icons?: any;
  fullRound?: boolean;
}> = ({ title, icons, fullRound }) => {
  const renderIcons = () => {
    if (Array.isArray(icons)) {
      return icons.map((icon, index) => <span key={index}>{icon}</span>);
    }
    if (icons) {
      return <span>{icons}</span>;
    }
    return null;
  };
  return (
    <SCompTitle
      style={{ borderRadius: fullRound ? "8px" : " 16px 16px 0 0px" }}
    >
      <div className="title">{title && <p>{title}</p>}</div>
      <div className="icons">{renderIcons()}</div>
    </SCompTitle>
  );
};
