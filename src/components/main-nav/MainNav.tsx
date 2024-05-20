"use client";
import { LogoInitials } from "@/src/icons/LogoInitiala";
import { SearchInput } from "../search-input/SearchInput";
import { SMainNav } from "./styles/MainNav";

export const MainNav = () => {
  return (
    <SMainNav>
      <LogoInitials />
      <SearchInput />
    </SMainNav>
  );
};
