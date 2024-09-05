"use client";
import React, { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { gql, useQuery, useMutation } from "@apollo/client";
import EditUserModal from "@/components/EditUserModal/EditUserModal";
import ManageSubscriptionModal from "@/components/SubscriptionModal/SubscriptionModal";
import { Button } from "flowbite-react";

const GET_USERS = gql`
  query Users(
    $paginationArgs: PaginationArgs!
    $validRolesArgs: ValidRolesArgs!
  ) {
    users(paginationArgs: $paginationArgs, validRolesArgs: $validRolesArgs) {
      id
      email
      firstName
      lastName
      roles
      subscription {
        tipo
      }
    }
  }
`;

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedSubscriptionUser, setSelectedSubscriptionUser] = useState<string | null>(null); // Nuevo estado para manejar la suscripción
  const { data, loading, error } = useQuery(GET_USERS, {
    variables: {
      paginationArgs: { limit: 10, offset: 0 },
      validRolesArgs: { roles: ["admin", "user"] },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
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
              {data?.users?.length > 0 ? (
                data.users.map((user: any) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.roles.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.subscription?.tipo || "No Subscription"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        pill
                        className="bg-violet hover:bg-darkviolet text-center mr-3 px-6 py-2 ml-4"
                        onClick={() => setSelectedUser(user.id)}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    No users found.
                  </td>
                </tr>
              )}
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
  );
};

export default Users;
