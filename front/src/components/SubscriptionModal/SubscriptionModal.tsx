"use client";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ISubscriptionModalProps } from "@/interfaces";

const UPDATE_SUBSCRIPTION = gql`
  mutation UpdateSubscription($updateSubscriptionInput: UpdateSubscriptionInput!) {
    updateSubscription(updateSubscriptionInput: $updateSubscriptionInput) {
      id
      price
      stripeId
      tipo
    }
  }
`;

const ManageSubscriptionModal: React.FC<ISubscriptionModalProps> = ({
  userId,
  onClose,
}) => {

  const storedUser = localStorage.getItem("user");
  const userId1 = storedUser ? JSON.parse(storedUser).user?.id : null;

  const [formData, setFormData] = useState({
    userId: userId1, // Inicializamos con el `userId` o puedes manejarlo de forma diferente
    price: "",
    stripeId: "",
    tipo: "",
  });

  const [updateSubscription] = useMutation(UPDATE_SUBSCRIPTION);

  const handleSubscriptionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;

    let updatedPrice = "";
    let updatedStripeId = "";

    if (selectedType === "Monthly") {
      updatedPrice = "10";
      updatedStripeId = "price_1PswZlDxc1HrUJzd32gljNEt";
    } else if (selectedType === "Annual") {
      updatedPrice = "100";
      updatedStripeId = "price_1PswaaDxc1HrUJzd0EFNFdos";
    }

    setFormData({
      ...formData,
      userId: userId,
      tipo: selectedType,
      price: updatedPrice,
      stripeId: updatedStripeId,
    });
  };

  const handleSubmit = async () => {
    try {
      // Verificar que no esté vacío el `subscriptionId` y los campos relevantes
      if (!formData.userId || !formData.tipo || !formData.price || !formData.stripeId) {
        throw new Error("Missing required fields");
      }

      // Ejecutar la mutación para actualizar la suscripción
      await updateSubscription({
        variables: {
          updateSubscriptionInput: {
            userId: userId,
            price: parseFloat(formData.price),
            stripeId: formData.stripeId,
            tipo: formData.tipo,
          },
        },
      });
      onClose(); // Cerrar modal después de actualizar
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4 text-white">Manage Subscription</h2>

        {/* Tipo de Suscripción */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Subscription Type:</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleSubscriptionTypeChange}
            className="border-gray-600 text-gray-200 bg-gray-800 border p-2 rounded-md w-full"
          >
            <option value="" className="text-gray-500">
              Select Subscription
            </option>
            <option value="Free">Free</option>
            <option value="Monthly">Monthly</option>
            <option value="Annual">Annual</option>
          </select>
        </div>

        {/* Precio de la suscripción (automático) */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Subscription Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            readOnly
            className="border-gray-600 text-gray-200 bg-gray-800 border p-2 rounded-md w-full"
          />
        </div>

        {/* Stripe ID (automático) */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Stripe ID:</label>
          <input
            type="text"
            name="stripeId"
            value={formData.stripeId}
            readOnly
            className="border-gray-600 text-gray-200 bg-gray-800 border p-2 rounded-md w-full"
          />
        </div>

        {/* Botones para Guardar y Cancelar */}
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
