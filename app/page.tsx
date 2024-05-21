"use client";

import { Benchmarking } from "@/src/components/benchmarking/Benchmarking";
import { CompTitle } from "@/src/components/component-title/CompTitle";
import { DailyInfo } from "@/src/components/daily-info/DailyInfo";
import { MainNav } from "@/src/components/main-nav/MainNav";
import { SideNav } from "@/src/components/side-nav/SideNav";
import { ArrowUp } from "@/src/icons/ArrowUp";
import { ExpandIcon } from "@/src/icons/ExpandIcon";
import { HomeIcon } from "@/src/icons/HomeIcon";
import { Notification } from "@/src/icons/Notification";
import { SettingIcon } from "@/src/icons/SettingIcon";

export default function Home() {
  return (
    <main className="flex justify-start items-start min-h-screen ">
      <SideNav />
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
          </div>
        </div>
      </div>
    </main>
  );
}
