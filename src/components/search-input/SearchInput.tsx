"use client";

import { FunctionComponent } from "react";
import { SContainer, SInput } from "./styles/SInput";
import { SearchIcon } from "@/src/icons/SearchIcon";

export const SearchInput: FunctionComponent = () => {
  return (
    <SContainer>
      <div className="cursor-pointer">
        <SearchIcon />
      </div>
      <SInput type="text" placeholder="Search" />
    </SContainer>
  );
};
