"use client";
import { LogoInitials } from "@/src/icons/LogoInitiala";
import { SearchInput } from "../search-input/SearchInput";
import { SMainNav, SRightSideNav } from "./styles/SMainNav";
import { LogoSmall } from "@/src/icons/IconSmall";
import { Notification } from "@/src/icons/Notification";
import { MainNavProfile } from "../main-nav-profile/MainNavProfile";
import ProfileImg from "../../icons/profile-imt-1.png";

export const MainNav = () => {
  return (
    <SMainNav>
      <div className="flex justify-between items-center">
        <LogoInitials />

        <SRightSideNav>
          <SearchInput />
          <LogoSmall />
          <Notification />
          <MainNavProfile name={"Eleanor Pen"} avatar={ProfileImg.src} />
        </SRightSideNav>
      </div>
    </SMainNav>
  );
};
