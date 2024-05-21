import { FunctionComponent } from "react";
import {
  ProgressBar,
  ProgressBarContainer,
  SBenchmarking,
} from "./styles/SBenchmarking";

export const Benchmarking: FunctionComponent = () => {
  const benchmarks = [
    { name: "TOTAL AVERAGE", percentage: 78 },
    { name: "Parameter-1", percentage: 65 },
    { name: "Parameter-2", percentage: 48 },
    { name: "Parameter-3", percentage: 25 },
    { name: "Parameter-4", percentage: 62 },
  ];
  return (
    <SBenchmarking>
      <div className="sections">
        {benchmarks?.map((benchmark, benchmarkIndex) => (
          <section key={benchmarkIndex}>
            <div>
              <div className="info">
                <span>{benchmark.name}</span>
                <span
                  style={{
                    color:
                      benchmark.percentage > 60
                        ? "var(--secondary-green)"
                        : benchmark.percentage < 30
                        ? "var(--primary-red)"
                        : "var(--secondary-red)",
                  }}
                >
                  {benchmark.percentage}%
                </span>
              </div>
              <ProgressBarContainer>
                <ProgressBar
                  color={
                    benchmark.percentage > 60
                      ? "var(--secondary-green)"
                      : benchmark.percentage < 30
                      ? "var(--primary-red)"
                      : "var(--secondary-red)"
                  }
                  style={{ width: `${benchmark.percentage}%`, height: "50px" }}
                />
              </ProgressBarContainer>
            </div>
          </section>
        ))}
      </div>
    </SBenchmarking>
  );
};
