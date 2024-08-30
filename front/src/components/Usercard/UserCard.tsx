"use client";
import React from "react";
// import { useUserData } from "@/helpers/hooks";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useSession } from "next-auth/react";

const UserCard = () => {
  // const { user, loading, error } = useUserData();
  const { data: session } = useSession();

  const { user } = useContext(UserContext);

  console.log(user?.user);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading user data.</p>;

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
            <p className="text-xl text-white">
              {user?.user?.firstName} {user?.user?.lastName} {session?.user?.name}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 font-semibold">Email:</p>
            <p className="text-xl text-white">{user?.user?.email} {session?.user?.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 font-semibold">Subscription:</p>
            {/* <p
              className={`text-xl ${
                user. === "Free" ? "text-green-400" : "text-blue-400"
              }`}
            >
              {user.suscription}
            </p> */}
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
