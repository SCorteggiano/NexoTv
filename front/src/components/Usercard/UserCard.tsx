"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserCard = () => {
  const { data: session } = useSession();
  const { user, setUser } = useContext(UserContext);

  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  // Obtener la imagen de perfil desde el localStorage o el contexto
  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profilePicture");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    } else if (user?.user?.userImage?.[0]) {
      setProfilePicture(user.user.userImage[0]);
    }
  }, [user]);

  const handleProfilePictureUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const id = user?.user?.id;

    console.log(id);

    const file = files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `https://nest-demo-zyb9.onrender.com/cloudinary/upload/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setProfilePicture(data.url);
      localStorage.setItem("profilePicture", data.url);
      setUser((prevUser) => ({ ...prevUser, profilePicture: data.url }));
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  return (
    <div
      id="wholeContainer"
      className="border rounded-lg p-6 bg-gray-800 border-gray-700 max-w-md mx-auto mt-10 text-center"
    >
      <div id="userCardContainer" className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-white">My Account</h2>
        <div id="userCardInfo" className="w-full">
          <div className="mb-4">
            <p className="text-gray-400 font-semibold">Profile Picture:</p>
            <div className="relative">
              {user?.user?.userImage?.[0] ? (
                <Image
                  src={profilePicture || user?.user?.userImage[0]}
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="rounded-full m-auto"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
              ) : (
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-muted rounded-full text-4xl font-bold border">
                    {user?.user?.firstName?.charAt(0)}
                  </div>
                </div>
              )}
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer"
              >
                <CameraIcon className="h-5 w-5" />
                <input
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureUpload}
                />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-400 font-semibold">Name:</p>
            <p className="text-xl text-white">
              {user?.user?.firstName} {user?.user?.lastName}{" "}
              {session?.user?.name}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-400 font-semibold">Email:</p>
            <p className="text-xl text-white">
              {user?.user?.email} {session?.user?.email}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-400 font-semibold">Subscription: {user?.user?.subscription?.tipo}</p>
            {/* Suscription info */}
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

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}