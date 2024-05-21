"use client";

import { Benchmarking } from "@/src/components/benchmarking/Benchmarking";
import { CompletedBaody } from "@/src/components/completed-body/CompletedBody";
import { CompTitle } from "@/src/components/component-title/CompTitle";
import { DailyInfo } from "@/src/components/daily-info/DailyInfo";
import { InProgressBody } from "@/src/components/in-progress-body/InProgressBody";
import { MainNav } from "@/src/components/main-nav/MainNav";
import { PendingBody } from "@/src/components/pending-body/PendingBody";
import { SideNav } from "@/src/components/side-nav/SideNav";
import { SubCompTitle } from "@/src/components/sub-comp-title/SubCompTitle";
import { TableBody } from "@/src/components/table/TableBody";
import { TrackerSearchBar } from "@/src/components/tracker-search/TrackerSearch";
import TrackerTable from "@/src/components/tracker-table/TrackerTable";
import { ArrowUp } from "@/src/icons/ArrowUp";
import { ExpandIcon } from "@/src/icons/ExpandIcon";
import { SettingIcon } from "@/src/icons/SettingIcon";

export default function Home() {
  return (
    <main className="flex justify-start items-start min-h-screen ">
      <SideNav />
      <div style={{ width: "50px" }} />
      <div className="w-full bg-[#f4f4f4] min-h-screen">
        <MainNav />
        <div className="main-sections p-3">
          <div className="flex gap-4 mb-4">
            <div className="daily-info-comp w-[383px]">
              <CompTitle title="Daily Information" />
              <div className="comp-body">
                <DailyInfo />
              </div>
            </div>

            <div className="benchmarking w-[100%]">
              <CompTitle
                title="Clinical Benchmarking"
                icons={[
                  <SettingIcon key="setting-icon" />,
                  <ExpandIcon key="expandIcon" />,
                ]}
              />
              <div className="comp-body">
                <Benchmarking />
              </div>
            </div>
          </div>

          <div className="patient-details w-full">
            <CompTitle
              fullRound
              title="Patient Details"
              icons={[<ArrowUp key={"ARROW-UP"} />]}
            />
            <div className="flex gap-5 items-stretch justify-start">
              <div className="pending w-[280px]">
                <SubCompTitle title="Pending" />
                <PendingBody />
              </div>
              <div className="inProgress w-[280px] ">
                <SubCompTitle title="inProgress" />
                <InProgressBody />
              </div>
              <div className="completed w-[280px]">
                <SubCompTitle title="Completed" />
                <CompletedBaody />
              </div>

              <div className="flex-1 ">
                <div className="cross-consult-req">
                  <SubCompTitle title="Cross Consultation Request" />
                  <TableBody />
                </div>
                <div className="cross-consult-req">
                  <SubCompTitle title="Cross Consultation Request" />
                  <TableBody />
                </div>
              </div>
            </div>
          </div>

          <div className="tracker mt-4">
            <CompTitle
              title="Patient Movement Tracker"
              fullRound
              icons={[<ArrowUp key={"movment-tracker-arrow"} />]}
            />
            <TrackerSearchBar />
            <TrackerTable />
          </div>
        </div>
      </div>
    </main>
  );
}
