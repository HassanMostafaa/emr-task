import styled from "styled-components";
import { SearchInput } from "../search-input/SearchInput";
import { FilterIcon } from "@/src/icons/Filter";

const Bar = styled.div`
  background-color: white;
  width: 100%;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  border-radius: 8px;
  box-shadow: 0 0 5px #00000025;
`;

export const TrackerSearchBar = () => {
  return (
    <Bar>
      <div className="w-72">
        <SearchInput />
      </div>
      <FilterIcon />
    </Bar>
  );
};
