import { FunctionComponent } from "react";
import {
  SCardWithIcon,
  SDailyInfo,
  SHoveringCard,
  SNumSpan,
} from "./styles/SDailyInfo";
import { PatientIcon } from "@/src/icons/PatientIcon";

export const DailyInfo: FunctionComponent = () => {
  const totalAppointments: number = 25;
  const totalVisit: number = 10;
  const inPatients: string = "08";
  return (
    <SDailyInfo>
      <div>
        <SHoveringCard>
          <p className="appointments">Total Appointments</p>
          <SNumSpan color={"var(--parimary-green)"}>
            {totalAppointments}
          </SNumSpan>
        </SHoveringCard>
        <SHoveringCard>
          <p className="appointments">Total Visits</p>
          <SNumSpan color={"var(--secondary-red)"}>{totalVisit}</SNumSpan>
        </SHoveringCard>
      </div>

      <div>
        <SCardWithIcon>
          <PatientIcon />

          <p>In Patients</p>

          <SNumSpan color="var(--secondary-blue)">{inPatients}</SNumSpan>
        </SCardWithIcon>
        <SCardWithIcon>
          <PatientIcon />

          <p>Out Patients</p>

          <SNumSpan color="var(--tertiary-blue)">{inPatients}</SNumSpan>
        </SCardWithIcon>
      </div>
    </SDailyInfo>
  );
};
