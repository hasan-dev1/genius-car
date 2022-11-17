import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import TeamDetails from "../Team/TeamDetails";
import HomeBanner from "./HomeBanner/HomeBanner";
import img1 from "../../assets/icons/check.svg";
import img2 from "../../assets/icons/deliveryt.svg";
import img3 from "../../assets/icons/Group 38729.svg";
import img4 from "../../assets/icons/group.svg";
import img5 from "../../assets/icons/Wrench.svg";
import img6 from "../../assets/icons/person.svg";
import img7 from "../../assets/icons/quote.svg";

const Home = () => {
  const [homedata, setHomedata] = useState();
  const [price, setPrice] = useState();
  const [team, setTeam] = useState();

  useEffect(() => {
    fetch(`https://geniuscar-server.vercel.app/homebanner`)
      .then((res) => res.json())
      .then((data) => setHomedata(data));
  }, []);

  //price loaded
  useEffect(() => {
    fetch("https://geniuscar-server.vercel.app/priceCar")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);

  //team loaded
  useEffect(() => {
    fetch("https://geniuscar-server.vercel.app/teamdata")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div>
      <div className="mx-auto w-4/5 my-12 ">
        <Splide
          options={{
            perPage: 1,
            perMove: 1,
            height: "70vh",
            rewind: true,
            gap: "1rem",
          }}
        >
          {homedata?.map((hd, idx) => (
            <HomeBanner key={idx} homedata={hd}></HomeBanner>
          ))}
        </Splide>
      </div>
      <div className="my-12">
        <AboutUs></AboutUs>
      </div>

      {/* //its services  */}
      <div className="my-5">
        <div className="mb-12">
          <h3 className="text-red-500 text-xl">Service</h3>
          <h3 className="text-6xl font-semibold my-3">Our Service Aria</h3>
          <h3 className="text-xl w-2/6 m-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </h3>
        </div>
        <div className="w-4/5 m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {price?.map((ps, idx) => (
            <Services key={idx} prices={ps}></Services>
          ))}
        </div>
      </div>
      <div className=" my-12">
        <button className="btn btn-success btn-outline rounded-lg">
          More Services
        </button>
      </div>

      {/* Team data  */}
      <div className="my-12">
        <div className="w-4/5 m-auto">
          <div className="mb-12">
            <h3 className="text-red-500 text-xl">Team</h3>
            <h3 className="text-6xl font-semibold my-3">Meet Our Team</h3>
            <h3 className="text-xl w-2/6 m-auto">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {team?.map((td, idx) => (
              <TeamDetails key={idx} teamdata={td}></TeamDetails>
            ))}
          </div>
        </div>
      </div>

      {/* choosing part */}

      <div className="w-4/5 m-auto">
        <div className="mb-12">
          <h3 className="text-red-500 text-xl">Core Feauture</h3>
          <h3 className="text-6xl font-semibold my-3">Why Choose Us</h3>
          <h3 className="text-xl w-2/6 m-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </h3>
        </div>
        <div className="flex justify-around lg:flex-row md:flex-row flex-col text-center my-5">
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img1} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img2} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img3} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img4} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img5} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-info p-12 rounded">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
