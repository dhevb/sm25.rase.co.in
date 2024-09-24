"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin , faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center">
        <p className="text-l sm:order-2 text-center mr-5 font-semibold">
          &copy; {new Date().getFullYear()} Department of Holistic Education. All rights reserved.
        </p>
        <div className="flex space-x-4 sm:order-1 ml-5">
          <a
            href="https://twitter.com/raseconferences"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/raseconferences/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/rase-conferences-3a4b71270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/shikshamahakumbh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCd-_B2IbovCDgVI1_I5ORGg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
        <div className="flex space-x-4 sm:order-1">
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
