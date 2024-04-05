import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto py-8 max-lg:px-4 border-t grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-sm:px-[18px] lg:px-8">
      <div>
        <div className="font-semibold">About</div>
        <div className="text-sm mt-2 leading-7">
          GiveUmmah Online Ventures India Pvt. Ltd. <br />
          49/235 - Eden enclave, Kursi road, <br />
          Lucknow, U.P., India, 226026
        </div>
      </div>
      <div className="space-y-3">
        <div className="font-semibold">Links</div>
        <div className="text-sm">About us</div>
        <div className="text-sm">Press and media</div>
        <div className="text-sm">Team</div>
        <div>
          <Link to="/careers">
            <div className="text-sm">Careers</div>
          </Link>
        </div>
      </div>
      <div className="grid gap-y-3 content-start">
        <div className="font-semibold">Contact</div>
        <a href="tel:+919151112898" className="text-sm">
          Phone : +91 9151112898
        </a>
        <a href="mailto:contact@giveumma.com" className="text-sm">
          Email : contact@giveumma.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
