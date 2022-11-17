import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { UserContext } from '../../Others/AuthContext/AuthContext';

const SignUp = () => {
  const navigate = useNavigate()
  const { userCreated, updateProfileInfo, siginWithPass } =
    useContext(UserContext);
  const [error, setError] = useState()

  const handleSignUp = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    //user creating...
    userCreated(email, password)
    .then(result =>{
      const user = result.user;
      const currentUser = { email: user.email };
      fetch(`https://geniuscar-server.vercel.app/jwt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("garrage-token", data.token);
          // navigate(from, { replace: true });
        });
      setError('')
      update(name, photoURL)
      navigate('/')
      form.reset()
    })
    .catch(err => setError(err.message))
  }
  const update = (nm,purl)=>{
    const profile = {
      displayName:nm,
      photoURL:purl
    }
    updateProfileInfo(profile)
  }
    return (
      <div>
        <div>
          <div className="py-12 bg-base-200">
            <div className="w-4/5 m-auto flex justify-around ">
              <div className="text-center flex items-center">
                <img src={img} alt="" />
              </div>
              <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100">
                <h4 className="mt-12 text-6xl">SignUp</h4>
                <div className="card-body">
                  <form onSubmit={handleSignUp}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name : </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered rounded-lg"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL : </span>
                      </label>
                      <input
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                        className="input input-bordered rounded-lg"
                      />
                    </div>
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
                    </div>
                    <div>
                      <p className='text-red-600 text-start'>{error}</p>
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                    <button className="btn btn-success btn-outline rounded-lg my-3 w-full">
                      SignUp
                    </button>
                  </form>

                  <div className="form-control mt-6">
                    <h2>
                      Already have a GeniusCar acc?{" "}
                      <Link className="text-yellow-700" to={"/login"}>
                        Login
                      </Link>
                    </h2>
                  </div>
                  <div>
                    <h3>Or Sign up with</h3>
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

export default SignUp;