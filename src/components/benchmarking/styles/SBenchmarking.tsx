import styled from "styled-components";

export const SBenchmarking = styled.div`
  background-color: white;
  height: 125px;
  border-radius: 0 0 20px 20px;
  min-height: 100%;
  .sections {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    section {
      flex: 1;
      min-height: 80px;
      padding: 17px;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--tertiary-blue);
      }
      span:nth-last-child(1) {
        color: red;
      }
    }
    section:nth-child(1) {
      min-width: 270px;
    }

    section:not(:last-child) {
      border-right: 1px solid #cfcfcf37;
    }
  }
`;
// Styled component for the progress bar container
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #d9d9d9;
`;

export const ProgressBar = styled.div`
  position: relative;
  border-radius: 2px;
  border: 0;
  background-color: ${({ color }) =>
    color}; /* Dynamically set the background color */
  transition: width 0.3s ease; /* Optional: Add transition effect to width changes */
`;
