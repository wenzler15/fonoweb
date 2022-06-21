import React, { useMemo } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

import NavBar from "../../components/navBar";

import { Container, AnalyticsLabel, ChartContainer } from "./styles";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

function Dashboard() {
  const months = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("pt-BR", {
      month: "long",
    });
  });

  const chartData = useMemo(() => {
    return [
      {
        label: "Pacientes",
        backgroundColor: "#3A36DB",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Consultas",
        backgroundColor: "#0090FF",
        data: [24, 12, 3, 53, 22, 40, 25],
      },
      {
        label: "Consultas",
        backgroundColor: "#D9E1E7",
        data: [24, 12, 3, 53, 22, 40, 25],
      },
    ];
  }, []);

  return (
    <>
      <NavBar />

      <Container>
        <div className="analyticsContainer">
          <div>
            {0 < -10 ? (
              <FiArrowUp
                style={{
                  backgroundColor: "rgba(26, 213, 152, 0.2)",
                }}
                color={"#1ad598"}
              />
            ) : (
              <FiArrowDown
                style={{
                  backgroundColor: "rgba(234, 58, 61, 0.2)",
                }}
                color={"#EA3A3D"}
              />
            )}

            <span>
              <strong>4,660.00</strong>
              <p>Consultas</p>
            </span>

            <AnalyticsLabel positive={0 < -10.9}>-10,78%</AnalyticsLabel>
          </div>

          <div>
            {0 < 10 ? (
              <FiArrowUp
                style={{
                  backgroundColor: "rgba(26, 213, 152, 0.2)",
                }}
                color={"#1ad598"}
              />
            ) : (
              <FiArrowDown
                style={{
                  backgroundColor: "rgba(234, 58, 61, 0.2)",
                }}
                color={"#EA3A3D"}
              />
            )}

            <span>
              <strong>4,660.00</strong>
              <p>Pacientes</p>
            </span>

            <AnalyticsLabel positive={0 < 10.9}>-10,78%</AnalyticsLabel>
          </div>

          <div>
            {0 < 10 ? (
              <FiArrowUp
                style={{
                  backgroundColor: "rgba(26, 213, 152, 0.2)",
                }}
                color={"#1ad598"}
              />
            ) : (
              <FiArrowDown
                style={{
                  backgroundColor: "rgba(234, 58, 61, 0.2)",
                }}
                color={"#EA3A3D"}
              />
            )}

            <span>
              <strong>4,660.00</strong>
              <p>Consultas</p>
            </span>

            <AnalyticsLabel positive={0 < 10.9}>-10,78%</AnalyticsLabel>
          </div>
        </div>

        <ChartContainer>
          <div>
            <h1>Dados dos pacientes</h1>
          </div>

          <Chart
            type="bar"
            data={{
              labels: months,
              datasets: chartData,
            }}
          />
        </ChartContainer>
      </Container>
    </>
  );
}

export default Dashboard;
