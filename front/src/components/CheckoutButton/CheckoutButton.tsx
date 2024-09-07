"use client";
import React from "react";
import stripePromise from "@/helpers/stripeClient";
import Router from "next/router";
import { gql, useMutation } from "@apollo/client";
import { ICheckoutSessionDto } from "@/interfaces";

// Definir la mutación de GraphQL con el DTO completo
const CREATE_CHECKOUT_SESSION = gql`
  mutation CreateCheckoutSession($createCheckoutSessionDto: CreateCheckoutSessionDto!) {
    createCheckoutSession(createCheckoutSessionDto: $createCheckoutSessionDto)
  }
`;


const CheckoutButton: React.FC<ICheckoutSessionDto> = ({ priceId, price, tipo, userId }) => {

  // Usar el hook de mutación
  const [createCheckoutSession] = useMutation(CREATE_CHECKOUT_SESSION);

  const handleCheckout = async () => {
    const router = Router;
    const stripe = await stripePromise;

    try {
      // Llamar a la mutación para crear la sesión de checkout
      const { data } = await createCheckoutSession({
        variables: {
          createCheckoutSessionDto: {
            priceId,
            tipo,
            price,
            userId,
          } as ICheckoutSessionDto,
        },
      });

      // Redirigir al checkout de Stripe usando el sessionId retornado por la mutación
      const result = await stripe?.redirectToCheckout({
        sessionId: data.createCheckoutSession,
      });

      if (result?.error) {
        console.error("Error in Stripe checkout:", result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="border border-gray-300 bg-gray-200 rounded-2xl p-2 w-40 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
    >
      Next
    </button>
  );
};

export default CheckoutButton;