import React from "react";
import Github from "../../assets/Icon/Github";
import Linkedin from "../../assets/Icon/Linkedin";
import Email from "../../assets/Icon/Email";
import { Link } from "@nextui-org/react";

function Footer(props) {
  const { data } = props;
  return (
    <footer className="bg-gray-300 text-black py-5 lg:px-24 px-0">
      <div className="container mx-auto flex lg:flex-row lg:justify-between items-center justify-center flex-col">
        <div>
          <h3 className="text-xl font-semibold ">Connect with Me</h3>
          <p>Let's stay in touch on social media and email.</p>
        </div>
        <div className="space-x-4 flex my-5">
          <Link
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="no-underline text-black"
          >
            <Email className="text-3xl" />
          </Link>
          <Link
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="no-underline text-black"
          >
            <Github className="text-3xl" />
          </Link>
          <Link
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="no-underline text-black"
          >
            <Linkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
