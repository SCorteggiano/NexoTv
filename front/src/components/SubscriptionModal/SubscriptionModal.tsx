"use client";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ISubscriptionModalProps } from "@/interfaces";
import { Button } from "flowbite-react";

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
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Manage Subscription</h2>
        <div className="mb-4">
          <label className="block mb-2">Subscription Type:</label>
          <select
            value={subscriptionId}
            onChange={(e) => setSubscriptionId(e.target.value)}
            className="border p-2 rounded-md w-full"
          >
            <option value="">Select Subscription</option>
            <option value="subscription_basic">Free</option>
            <option value="subscription_premium">Monthly</option>
            <option value="subscription_pro">Annual</option>
          </select>
        </div>
        <div className="flex justify-between">
          <Button
            pill
            onClick={handleSubmit}
            className="bg-green-500  px-4 py-2 rounded-lg"
          >
            Save
          </Button>
          <Button
            pill
            onClick={onClose}
            className="bg-red-500  px-4 py-2 rounded-lg"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscriptionModal;
