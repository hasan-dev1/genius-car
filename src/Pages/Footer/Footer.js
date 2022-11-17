import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
      <div className="bg-base-200 text-base-content">
        <footer className="footer p-10  w-4/5 m-auto">
          <div className="text-center">
            <img src={logo} alt="" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link to={"#"} className="link link-hover">
              Branding
            </Link>
            <Link to={"#"} className="link link-hover">
              Design
            </Link>
            <Link to={"#"} className="link link-hover">
              Marketing
            </Link>
            <Link to={"#"} className="link link-hover">
              Advertisemen
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to={"#"} className="link link-hover">
              About us
            </Link>
            <Link to={"#"} className="link link-hover">
              Contact
            </Link>
            <Link to={"#"} className="link link-hover">
              Jobs
            </Link>
            <Link to={"#"} className="link link-hover">
              Press ki
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to={"#"} className="link link-hover">
              Terms of use
            </Link>
            <Link to={"#"} className="link link-hover">
              Privacy policy
            </Link>
            <Link to={"#"} className="link link-hover">
              Cookie polic
            </Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;