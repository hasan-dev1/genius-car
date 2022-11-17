import React from 'react';
import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-4/5 my-24 mx-auto">
          <div className="relative">
            <img className="rounded-lg w-3/4 mb-24" src={img1} alt="" />
            <img
              className="rounded-lg absolute w-2/4 right-16 border-8 border-white bottom-0"
              src={img2}
              alt=""
            />
          </div>
          <div className="text-start">
            <h4 className='text-red-500 text-xl'>About Us</h4>
            <h4 className='text-6xl font-semibold w-2/3 my-8'>We are qualified & of experience in this field</h4>
            <p className='my-3 text-xl'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <p className='my-8 text-xl'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.{" "}
            </p>
            <button className="btn btn-success rounded-lg ">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;