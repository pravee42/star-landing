import React from "react";
import style from "./index.module.css";
import about from "../../../../assests/about.jpg";
import info from "../../../../assests/info1.png";
import quality from "../../../../assests/quality.jpg";
import vission from "../../../../assests/vission.jpg";
import expertise from "../../../../assests/expert.png";
import relantionship from "../../../../assests/relantioship.jpg";
import community from "../../../../assests/community.jpg";
import visit from "../../../../assests/visit.jpg";
export const Content = () => {
  return (
    <div className={`${style.continer}`}>
      <div>
        <h1>About us</h1>
        <div className={`${style.abtcontiner}`}>
          <p className={`${style.text}`}>
            Welcome to Start mobiles, your trusted destination for all your
            mobile needs. Established in [Year of Establishment], we're
            dedicated to providing you with the best in mobile technology,
            accessories, and services, backed by a commitment to quality and
            customer satisfaction.
          </p>
          <img src={about} className={`${style.img}`} />
        </div>

        <h1>Our journey</h1>
        <div className={`${style.abtcontiner}`}>
          <img src={info} className={`${style.img}`} />
          <p className={`${style.text}`}>
            Our journey began with a simple idea – to create a space where
            technology enthusiasts, professionals, and everyday users alike
            could find the perfect mobile solutions. Over the years, we've grown
            from a small venture to a reputable destination, serving our
            community with pride.
          </p>
        </div>

        <h1>Our Vision</h1>
        <div className={`${style.abtcontiner}`}>
          <p className={`${style.text}`}>
            Our vision is to be more than just a mobile shop; we aim to be your
            mobile partner. We understand the pivotal role mobile devices play
            in your life – from staying connected to capturing memories. That's
            why we curate a diverse range of products that cater to various
            preferences and needs.
          </p>
          <img src={vission} className={`${style.img}`} />
        </div>

        <h1>Unparalleled Quality</h1>
        <div className={`${style.abtcontiner}`}>
          <img src={quality} className={`${style.img}`} />
          <p className={`${style.text}`}>
            Quality is at the core of everything we do. Each product on our
            shelves is carefully selected to meet our stringent quality
            standards. We believe that your mobile device should be an
            investment that lasts, which is why we source products from trusted
            brands known for their reliability and innovation.
          </p>
        </div>

        <h1>Expertise that Matters</h1>
        <div className={`${style.abtcontiner}`}>
          <p className={`${style.text}`}>
            Our team is comprised of dedicated mobile enthusiasts and experts
            who are passionate about what they do. From helping you choose the
            perfect phone to offering technical advice, we're here to ensure you
            make informed decisions that enhance your mobile experience.
          </p>
          <img src={expertise} className={`${style.img}`} />
        </div>

        <h1>Expertise that Matters</h1>
        <div className={`${style.abtcontiner}`}>
          <img src={relantionship} className={`${style.img}`} />
          <p className={`${style.text}`}>
            Our team is comprised of dedicated mobile enthusiasts and experts
            who are passionate about what they do. From helping you choose the
            perfect phone to offering technical advice, we're here to ensure you
            make informed decisions that enhance your mobile experience.
          </p>
        </div>

        <h1>Community-Centric Approach</h1>
        <div className={`${style.abtcontiner}`}>
          <p className={`${style.text}`}>
            As a locally-owned shop, we're proud to be part of this community.
            We're your neighbors, friends, and fellow tech enthusiasts. This is
            why we focus on creating a welcoming and informative environment
            where you can explore, learn, and make the right choices for your
            mobile needs.
          </p>
          <img src={community} className={`${style.img}`} />
        </div>

        <h1>Visit us today</h1>
        <div className={`${style.abtcontiner}`}>
          <img src={visit} className={`${style.img}`} />
          <p className={`${style.text}`}>
            We invite you to step into our store and experience the world of
            mobile technology firsthand. Our friendly team is ready to assist
            you, answer your questions, and provide recommendations tailored to
            your preferences. Discover the latest products, explore cutting-edge
            features, and find solutions that match your lifestyle. Thank you
            for choosing [Your Mobile Shop Name] as your go-to destination for
            all things mobile. We're excited to be part of your mobile journey
            and look forward to serving you for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};
