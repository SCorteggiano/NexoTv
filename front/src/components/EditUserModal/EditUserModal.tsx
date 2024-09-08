"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { IEditUserModalProps } from "@/interfaces";
import { Button } from "flowbite-react";

const GET_USER = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      email
      firstName
      lastName
      roles
      subscription {
        id
        tipo
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      firstName
      lastName
      email
    }
  }
`;

const EditUserModal: React.FC<IEditUserModalProps> = ({ userId, onClose }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId },
  });
  const [updateUser] = useMutation(UPDATE_USER);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
      });
    }
  }, [data]);

  const handleSubmit = async () => {
    try {
      await updateUser({
        variables: { updateUserInput: { ...formData, id: userId } },
      });
      onClose(); // Cerrar modal tras guardar cambios
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-red-500 text-2xl">Error loading content</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-lightBackground dark:bg-darkBackground p-8 rounded-lg shadow-lg text-lightText dark:text-darkText">
        <h2 className="text-2xl mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-4  bg-green-600 hover:bg-green-900 rounded-full font-bold text-[#efefef]"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4  bg-red-600 hover:bg-red-900 rounded-full font-bold text-[#efefef]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
