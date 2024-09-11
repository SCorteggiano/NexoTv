"use client";
import React, { useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/Loading/Loading";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const COUNT_USERS = gql`
  query {
    countUser
  }
`;

const GET_SUBSCRIPTION_COUNTS = gql`
  query GetSubscriptionCounts {
    getSubscriptionCounts {
      Free
      Monthly
      Annual
    }
  }
`;

const Dashboard: React.FC = () => {
  const { isLogged, isAdmin } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged || !isAdmin) {
      router.push("/not-authorized");
    }
  }, [isLogged, isAdmin, router]);

  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery(COUNT_USERS);

  const {
    data: subscriptionCountsData,
    loading: subscriptionCountsLoading,
    error: subscriptionCountsError,
  } = useQuery(GET_SUBSCRIPTION_COUNTS);

  if (usersLoading || subscriptionCountsLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  if (usersError || subscriptionCountsError)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-center text-2xl">Error loading metrics</p>
      </div>
    );

  // Obtener datos de la query
  const totalUsers = usersData?.countUser || 0;
  const subscriptionCounts = subscriptionCountsData?.getSubscriptionCounts || {
    Free: 0,
    Monthly: 0,
    Annual: 0,
  };

  // Evitar valores indefinidos o no numéricos
  const totalSubscriptions =
    typeof subscriptionCounts.Monthly === "number"
      ? subscriptionCounts.Monthly
      : 0 +
    typeof subscriptionCounts.Annual === "number"
      ? subscriptionCounts.Annual
      : 0;
  
  const nonSubscribers = typeof subscriptionCounts.Free === "number" ? subscriptionCounts.Free : 0; // Usuarios Free

  // Configuración del gráfico
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Free", "Monthly", "Annual"],
    colors: ["#00E396", "#FEB019", "#FF4560"],
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
    typeof subscriptionCounts.Free === "number" ? subscriptionCounts.Free : 0,
    typeof subscriptionCounts.Monthly === "number" ? subscriptionCounts.Monthly : 0,
    typeof subscriptionCounts.Annual === "number" ? subscriptionCounts.Annual : 0,
  ];


  return isLogged && isAdmin ? (
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
              Free Users: <strong>{subscriptionCounts.Free}</strong>
            </p>
            <p>
              Monthly Subscribers: <strong>{subscriptionCounts.Monthly}</strong>
            </p>
            <p>
              Annual Subscribers: <strong>{subscriptionCounts.Annual}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  ): null;
};

export default Dashboard;
