import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../Others/AuthContext/AuthContext";
import ShowOrders from "./ShowOrders";

const OrderDetails = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://geniuscar-server.vercel.app/orderdetails/${user?.email}`, {
      headers: {
        authtoken: `Berear ${localStorage.getItem("garrage-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "emaildata");
        setOrders(data);
      })
      .catch((err) => console.error(err.message));
  }, [user?.email]);

  //delete counter
  const handleDelete = (e) => {
    console.log("id", e._id);
    fetch(`https://geniuscar-server.vercel.app/ordersdelete/${e._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remine = orders.filter((ro) => ro._id !== e._id);
          setOrders(remine);

          alert("Item deleted");
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-4/5 mx-auto my-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((od, idx) => (
              <ShowOrders
                key={idx}
                orders={od}
                user={user}
                handleDelete={handleDelete}
              ></ShowOrders>
            ))}
          </tbody>
        </table>
        <h3 className="text-center bg-[#EFEAE6] rounded-b-lg py-2">
          discount offer
        </h3>
      </div>
    </div>
  );
};

export default OrderDetails;
