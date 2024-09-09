"use client";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ISubscriptionModalProps } from "@/interfaces";

const UPDATE_USER_SUBSCRIPTION = gql`
  mutation UpdateUserSubscription($userId: String!, $subscriptionId: String!) {
    updateUserSubscription(userId: $userId, subscriptionId: $subscriptionId) {
      id
      subscription {
        id
        tipo
        price
      }
    }
  }
`;

const ManageSubscriptionModal: React.FC<ISubscriptionModalProps> = ({
  userId,
  onClose,
}) => {
  const [subscriptionId, setSubscriptionId] = useState("");
  const [updateSubscription] = useMutation(UPDATE_USER_SUBSCRIPTION);

  const handleSubmit = async () => {
    try {
      await updateSubscription({ variables: { userId, subscriptionId } });
      onClose(); // Cerrar modal después de actualizar
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4 text-white">Manage Subscription</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Subscription Type:</label>
          <select
            value={subscriptionId}
            onChange={(e) => setSubscriptionId(e.target.value)}
            className="border-gray-600 text-gray-200 bg-gray-800 border p-2 rounded-md w-full"
          >
            <option value="" className="text-gray-500">
              Select Subscription
            </option>
            <option value="subscription_basic">Free</option>
            <option value="subscription_premium">Monthly</option>
            <option value="subscription_pro">Annual</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="px-6 py-4 bg-green-600 hover:bg-green-900 rounded-full font-bold text-[#efefef]"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-6 py-4 bg-red-600 hover:bg-red-900 rounded-full font-bold text-[#efefef]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscriptionModal;
