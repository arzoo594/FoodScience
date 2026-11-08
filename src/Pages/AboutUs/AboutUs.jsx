import AboutFooter from "../../Components/AboutUs/AboutFooter";
import AboutHero from "../../Components/AboutUs/AboutHero";
import OurMission from "../../Components/AboutUs/OurMission";
import OurPromise from "../../Components/AboutUs/OurPromise";
import SisterBrand from "../../Components/AboutUs/SisterBrand";
import WhatWeCover from "../../Components/AboutUs/WhatWeCover";
import WhoWeAre from "../../Components/AboutUs/WhoWeAre";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <WhatWeCover />
      <OurMission />
      <SisterBrand />
      <OurPromise />
      <AboutFooter />
    </div>
  );
};

export default AboutUs;
