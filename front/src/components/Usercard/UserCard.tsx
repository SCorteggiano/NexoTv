import React from "react";
import { useUserData } from "@/helpers/hooks";
import { Button } from "flowbite-react";
import Link from "next/link";

const UserCard = () => {
  const { user, loading, error } = useUserData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user data.</p>;

  if (!user)
    return (
      <>
        <p>Need to be Logged!</p>
        <Button
          as={Link}
          href="/login"
          className="bg-transparent border-violet hover:bg-darkviolet text-center mr-3"
        >
          Login
        </Button>
      </>
    );

  return (
    <div
      id="wholeContainer"
      className="border border-white rounded-lg p-6 bg-transparent max-w-md mx-auto mt-10 text-center"
    >
      <div id="userCardContainer" className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-white">My Account</h2>
        <div id="userCardInfo" className="w-full">
          <div className="mb-4">
            <p className="text-gray-300 font-semibold">Name:</p>
            <p className="text-xl text-white">{user.firstName} {user.lastName}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 font-semibold">Email:</p>
            <p className="text-xl text-white">{user.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 font-semibold">Subscription:</p>
            <p
              className={`text-xl ${
                user.suscription === "Free" ? "text-green-400" : "text-blue-400"
              }`}
            >
              {user.suscription}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
