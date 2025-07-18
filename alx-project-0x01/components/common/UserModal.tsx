import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const nestedKeys = name.split(".");
    if (nestedKeys.length > 1) {
      setUser(prev => {
        const updated = { ...prev };
        let obj: any = updated;
        for (let i = 0; i < nestedKeys.length - 1; i++) {
          obj = obj[nestedKeys[i]];
        }
        obj[nestedKeys[nestedKeys.length - 1]] = value;
        return updated;
      });
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="input" />
            <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
            <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
            <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />

            <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
            <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
            <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />
            <input name="address.geo.lat" placeholder="Latitude" value={user.address.geo.lat} onChange={handleChange} className="input" />
            <input name="address.geo.lng" placeholder="Longitude" value={user.address.geo.lng} onChange={handleChange} className="input" />

            <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
            <input name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
            <input name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} className="input" />
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
