"use client";
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { gql, useQuery } from "@apollo/client";
import EditUserModal from "@/components/EditUserModal/EditUserModal";
import ManageSubscriptionModal from "@/components/SubscriptionModal/SubscriptionModal";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";


// Definir la consulta para obtener usuarios con paginación y roles válidos
const GET_SUBSCRIPTIONS = gql`
  query GetSubscription {
    getSubscription {
      id
      tipo
      price
      user {
        id
        email
        firstName
        lastName
        userImage
        views
        roles
      }
    }
  }
`;

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedSubscriptionUser, setSelectedSubscriptionUser] = useState<string | null>(null);
  
  const { isLogged, isAdmin } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged || !isAdmin) {
      router.push("/not-authorized");
    }
  }, [isLogged, isAdmin, router]);

  // Ejecutar la consulta para obtener usuarios y sus suscripciones
  const { data, loading, error } = useQuery(GET_SUBSCRIPTIONS);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className=" text-2xl">Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error loading users</p>;

  // Renderiza solo si el usuario está logueado y es admin
  return isLogged && isAdmin ? (
    <div className="flex">
      <AdminNavbar />
      <div className="p-6 flex-1">
        <h1 className="text-4xl font-bold">Manage Users</h1>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Roles</th>
                <th className="px-6 py-3 text-left">Subscription</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.getSubscription?.map((subscription: any) => (
                <tr key={subscription.user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subscription.user.firstName} {subscription.user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subscription.user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subscription.user.roles.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subscription.tipo || "Error loading subscription"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-violet hover:bg-darkviolet text-[#efefef] rounded-full text-center mr-3 px-6 py-2 ml-4"
                      onClick={() => setSelectedUser(subscription.user.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    <button
                      className="bg-violet hover:bg-darkviolet text-[#efefef] rounded-full text-center mr-3 px-6 py-2 ml-4"
                      onClick={() => setSelectedSubscriptionUser(subscription.user.id)}
                    >
                      Manage Subs
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <EditUserModal
            userId={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}

        {selectedSubscriptionUser && (
          <ManageSubscriptionModal
            userId={selectedSubscriptionUser}
            onClose={() => setSelectedSubscriptionUser(null)}
          />
        )}
      </div>
    </div>
  ) : null;
};
export default Users;
