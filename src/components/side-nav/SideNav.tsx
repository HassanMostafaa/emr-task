import { FunctionComponent } from "react";
import { SIconsContainer, SSideNav } from "./styles/SSIdeNav";
import Image from "next/image";
import LogoBig from "../../icons/LogoBig-img.jpg";
import { HomeIcon } from "@/src/icons/HomeIcon";
import { Notification } from "@/src/icons/Notification";
import { MenuDots } from "@/src/icons/MenuDots";
import { BellIcon } from "@/src/icons/BellIcon";
import { InvoiceIcon } from "@/src/icons/InvoiceIcon";
import { AaprovalsIcon } from "@/src/icons/AaprovalsIcon";

export const SideNav: FunctionComponent = () => {
  return (
    <SSideNav>
      <Image
        alt="Logo-big"
        src={LogoBig.src}
        width={32}
        height={32}
        style={{ borderRadius: "3px", marginTop: 5 }}
      />
      <SIconsContainer>
        <div className="icon">
          <HomeIcon />
        </div>
        <div className="icon">
          <BellIcon />
        </div>
        <div className="icon selected">
          <InvoiceIcon />
        </div>
        <div className="icon">
          <AaprovalsIcon />
        </div>
        <div className="icon">
          <HomeIcon />
        </div>

        <MenuDots />
      </SIconsContainer>
    </SSideNav>
  );
};
