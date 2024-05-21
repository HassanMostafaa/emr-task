import styled from "styled-components";

export const SDailyInfo = styled.div`
  background-color: #fff;
  padding: 17px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 17px;
  border-radius: 0px 0px 20px 20px;
  div {
    width: 100%;
  }
`;
export const SHoveringCard = styled.div`
  box-shadow: 0 0 10px #00000026;
  padding: 9px;
  border-radius: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 17px;
`;

export const SCardWithIcon = styled.div`
  white-space: nowrap;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 8px; */
  gap: 20px;
  margin-bottom: 10px;

  svg {
    box-shadow: 0 0 5px #21a3f32d;
    padding: 6px;
    box-sizing: content-box;
    border-radius: 4px;
  }
`;

export const SNumSpan = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
