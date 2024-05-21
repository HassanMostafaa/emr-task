"use client";

import { FunctionComponent, useState } from "react";
import { SContainer, SInput } from "./styles/SInput";
import { SearchIcon } from "@/src/icons/SearchIcon";

export const SearchInput: FunctionComponent = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const searchHandler = (
    e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent
  ): void => {
    e.preventDefault();
    alert(`You searched for: ${searchVal}`);
  };
  return (
    <SContainer>
      <div className="cursor-pointer" onClick={searchHandler}>
        <SearchIcon />
      </div>
      <form onSubmit={searchHandler}>
        <SInput
          type="text"
          placeholder="Search"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </form>
    </SContainer>
  );
};
