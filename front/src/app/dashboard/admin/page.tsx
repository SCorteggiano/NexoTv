"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const COUNT_USERS = gql`
  query {
    countUser
  }
`;

const COUNT_SUBSCRIPTIONS = gql`
  query {
    countSubscriptions
  }
`;

const Dashboard: React.FC = () => {
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery(COUNT_USERS);
  const {
    data: subscriptionsData,
    loading: subscriptionsLoading,
    error: subscriptionsError,
  } = useQuery(COUNT_SUBSCRIPTIONS);

  if (usersLoading || subscriptionsLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-center text-2xl">Loading metrics...</p>
      </div>
    );
  if (usersError || subscriptionsError)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-center text-2xl">Error loading metrics</p>
      </div>
    );

  // Asegurarse de que los datos sean válidos
  const totalUsers = usersData?.countUser || 0;
  const totalSubscriptions = subscriptionsData?.countSubscriptions || 0;
  const nonSubscribers = Math.max(0, totalUsers - totalSubscriptions); // Evitar valores negativos

  // Configuración del gráfico
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Subscribers", "Non-Subscribers"],
    colors: ["#00E396", "#FF4560"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Validar que las series sean números y no estén indefinidas
  const chartSeries = [
    typeof totalSubscriptions === "number" ? totalSubscriptions : 0,
    typeof nonSubscribers === "number" ? nonSubscribers : 0,
  ];

  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">User Metrics</h1>
        <div className="flex justify-between items-center">
          {/* Gráfico de dona */}
          <div>
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="donut"
              width={380}
            />
          </div>
          {/* Detalle de las métricas */}
          <div className="ml-8 text-lg">
            <p>
              Total Users: <strong>{totalUsers}</strong>
            </p>
            <p>
              Subscribed Users: <strong>{totalSubscriptions}</strong>
            </p>
            <p>
              Non-Subscribed Users: <strong>{nonSubscribers}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
