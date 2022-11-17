import React from "react";
import { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { UserContext } from "../../Others/AuthContext/AuthContext";

const OrderCheckout = () => {
  const { user } = useContext(UserContext);
  const order = useLoaderData();
  const { id, name, Price, image } = order;
  const navigate = useNavigate();

  //handle order confirm
  const handleOrderconfirm = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.first.value + " " + form.last.value;
    const phone = parseInt(form.number.value);
    const email = user?.email || "unRegistered";
    const yourtext = form.yourtext.value;

    const order = { name, phone, email, yourtext };

    fetch("https://geniuscar-server.vercel.app/addorder/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          navigate("/orderdetails");
          console.log("data", data);
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="w-1/2 mx-auto my-12">
      <div className="my-8">
        <img
          className="rounded-lg"
          src={image}
          style={{ width: "100vw", height: "35vh" }}
          alt=""
        />
      </div>

      <form onSubmit={handleOrderconfirm}>
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 my-12 text-start ">
          <div>
            <input
              type="text"
              name="first"
              required
              placeholder="First Name"
              className="border-2 border-sky-300 rounded w-full p-2 focus:outline-none text-sky-600 text-2xl my-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              className="border-2 border-sky-300 rounded w-full p-2 focus:outline-none text-sky-600 text-2xl my-2"
            />
          </div>
          <div>
            <input
              type="text"
              required
              name="number"
              placeholder="Your Phone"
              className="border-2 border-sky-300 rounded w-full p-2 focus:outline-none text-sky-600 text-2xl my-2"
            />
          </div>
          <div>
            <input
              type="email"
              readOnly
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="border-2 border-sky-300 rounded w-full p-2 focus:outline-none text-sky-600 text-2xl my-2"
            />
          </div>
        </div>
        <div>
          <textarea
            rows={5}
            name="yourtext"
            placeholder="Your Message"
            className="border-2 border-sky-300 rounded w-full p-2 focus:outline-none text-sky-600 text-2xl my-2"
            type="text"
          />
        </div>
        <button
          type="submit"
          className=" w-full block py-4 text-xl bg-red-600 rounded text-white "
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default OrderCheckout;
