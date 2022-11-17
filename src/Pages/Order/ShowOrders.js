import React from 'react';

const ShowOrders = ({ orders, user, handleDelete }) => {
  const { name, email, phone, yourtext } = orders;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(orders)}
          className="btn w-4 btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">Registered</span>
      </td>
      <td>
        <span className="bg-red-600 px-3 py-1 rounded text-white">
          Pending...
        </span>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">{yourtext}</button>
      </th>
    </tr>
  );
};

export default ShowOrders;