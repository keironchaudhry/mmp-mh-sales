import React from "react";

import Image from "react-bootstrap/Image";

import appStyles from "../../App.module.css";
import heroImage from "../../assets/heroimagepool.png";

const ContactImage = () => {
  <Image src={heroImage} className={`${appStyles.Image} mt-5`} />;
};

export default ContactImage;