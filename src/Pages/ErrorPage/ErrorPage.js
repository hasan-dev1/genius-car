import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './ErrorPage.png'

const ErrorPage = () => {
    return (
      <div>
        <div className='flex flex-col justify-center items-center my-24'>
          <img src={img1} alt="" />
          <div>
            <h4 className='text-4xl'>404 Page Not Found <Link to={'/'} className='text-sky-600'>Back to home</Link></h4>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;