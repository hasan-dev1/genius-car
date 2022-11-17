import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { UserContext } from "../../Others/AuthContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { siginWithPass } = useContext(UserContext);
  const [error, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    siginWithPass(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        fetch(`https://geniuscar-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("garrage-token", data.token);
            navigate(from, { replace: true });
          });
        console.log(user);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div>
        <div className="py-24 bg-base-200">
          <div className="w-4/5 m-auto flex justify-around ">
            <div className="text-left">
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100">
              <h4 className="mt-12 text-6xl">Login</h4>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered rounded-lg"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered rounded-lg"
                    />

                    <div>
                      <p className="text-red-500">{error}</p>
                    </div>
                    <label className="label">
                      <Link className=" link-hover">Forgot password?</Link>
                    </label>
                  </div>
                  <div>
                    <button className="btn btn-success btn-outline rounded-lg w-full my-3">
                      Login
                    </button>
                  </div>
                </form>

                <div className="form-control mt-6">
                  <div>
                    <h3>
                      New in Genius Car?{" "}
                      <Link to={"/signup"} className="text-yellow-700">
                        Register
                      </Link>
                    </h3>
                  </div>
                </div>
                <div>
                  <h3>Or Sign in with</h3>
                  <div className="my-3">
                    <button className="btn btn-success mx-3 px-3 py-2 rounded-lg">
                      Google
                    </button>
                    <button className="btn btn-success mx-3 px-3 py-2 rounded-lg">
                      Github
                    </button>
                    <button className="btn btn-success mx-3 px-3 py-2 rounded-lg">
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
