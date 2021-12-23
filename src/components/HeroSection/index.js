import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import Video from "../../assets/videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onHover = () => {
    setIsHovered(true);
  };
  const onLeave = () => {
    setIsHovered(false);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop={true}
          muted={true}
          src={Video}
          type="video/mp4"
          preload="true"
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $300 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary={true}
            dark={true}
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            smooth={true}
            duration={1100}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {isHovered ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
