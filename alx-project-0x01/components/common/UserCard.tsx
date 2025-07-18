import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm">{phone}</p>
      <p className="text-sm text-blue-600">{website}</p>

      <div className="mt-2">
        <p className="text-sm font-semibold">Company:</p>
        <p className="text-sm text-gray-700">{company.name}</p>
        <p className="text-sm italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm font-semibold">Address:</p>
        <p className="text-sm">
          {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

