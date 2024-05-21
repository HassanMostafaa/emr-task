import styled from "styled-components";

export const SSideNav = styled.div`
  background-color: var(--tertiary-blue);
  color: white;
  min-height: 100vh;
  box-shadow: 2px 4px 8px #00000016;
  /* padding: 10px; */
  max-width: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
  flex-direction: column;
  padding: 5px;
`;

export const SIconsContainer = styled.div`
  svg {
    margin: 0 auto;
  }
  .icon {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    margin-bottom: 13px;
    position: relative;
    svg {
      box-sizing: content-box;
      width: 100%;
      padding: 7px 0;
      border-radius: 5px 0 0 5px;
    }
    &.selected {
      svg {
        background-color: #fff;
        color: #000;
        box-shadow: inset 0 0 2px #000;
      }
      &::after {
        display: block;
      }
    }

    &::after {
      content: "";
      display: none;
      position: absolute;
      right: -5px;
      top: -10%;
      width: 5px;
      height: 120%;
      background-color: var(--secondary-blue);
      border-radius: 5px 0px 0px 5px;
    }

    &:hover {
      svg {
        background-color: #fff;
        color: #000;
        box-shadow: inset 0 0 2px #000;
      }
      &::after {
        display: block;
      }
    }
  }
`;
