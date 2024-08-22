import React from "react";

const UserCard = () => {
  const testUser = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Springfield",
      phone: "555-1234",
      suscribtion: true,
    },
  };

  return (
    <>
      <div className=" flex-col flex justify-center items-center text-lg">
        <div>
          <h2 className="text-2xl mb-4 ">MY ACCOUNT</h2>
          <p className="">
            <strong>Name:</strong> {testUser.user.name}
          </p>
          <p className="">
            <strong>Email:</strong> {testUser.user.email}
          </p>
          <p className="">
            <strong>Address:</strong> {testUser.user.address}
          </p>
          <p className="">
            <strong>Phone:</strong> {testUser.user.phone}
          </p>
          <p className="">
            <strong>Suscription:</strong>{" "}
            {testUser.user.suscribtion ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
