import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import avatar from "../../icons/profile-imt-1.png";
import { Notification } from "@/src/icons/Notification";

const Card = styled.div`
  background-color: white;
  box-shadow: 0 0 5px #00000025;
  padding: 11px 0;
  border-radius: 4px;
  margin-bottom: 13px;
`;

const Patient = styled.div`
  border-left: 4px solid red;
  padding: 0 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 5px;
    font-size: 13px;
    background-color: white;
  }
  .nov-tag,
  .cc-tag {
    color: #080808;
    background-color: #bdbdbd;
    font-size: 11px;
    border-radius: 1px;
    margin: 0;
    display: inline-block;
  }
  .time {
    color: var(--tertiary-blue);
    font-size: 13px;
  }
`;

export const PatientCard: FunctionComponent<{ empty?: boolean }> = ({
  empty,
}) => {
  return !empty ? (
    <Card>
      <Patient>
        <Image src={avatar.src} width={57} height={57} alt="avtr" />

        <div>
          <p>Jerome Bell</p>

          <span className="nov-tag">NOV </span>
          <span>Procdure</span>
          <br />
          <p className="cc-tag">CC</p>
        </div>

        <div className="time">
          <p>2.00 PM</p>
          <Notification />
        </div>
      </Patient>
    </Card>
  ) : (
    <div className="">
      <p className="text-center">Drop Item Here</p>
    </div>
  );
};
