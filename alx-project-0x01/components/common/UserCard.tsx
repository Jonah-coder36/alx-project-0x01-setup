import { UserProps } from '@/interfaces';

export default function UserCard({ name, email, phone, website, company, address }: UserProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm">{phone}</p>
      <p className="text-sm text-blue-500 underline">{website}</p>
      <p className="text-sm font-medium mt-2">Company: {company.name}</p>
      <p className="text-xs text-gray-500">Address: {address.street}, {address.city}</p>
    </div>
  );
}
