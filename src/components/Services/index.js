import React from "react";
import Icon1 from "../../images/chatify.png";
import Icon2 from "../../images/codeEditor.png";
import Icon3 from "../../images/11.png";
import Icon4 from "../../images/rob.png.jpeg";
import Icon5 from "../../images/14.jpeg";
import Icon6 from "../../images/13.jpeg";
import Icon7 from "../../images/codeEditor.png";
import Icon8 from "../../images/20.png";
import Icon9 from "../../images/self.png.jpeg";
import Icon10 from "../../images/led.jpeg";
import Icon11 from "../../images/19.jpeg";
import Icon12 from "../../images/blog.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id={"services"}>
      <ServicesH1>Projects and Games</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Air Show</ServicesH2>
          <ServicesP>
          A beautiful air show with remote controlled drones and airship.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ENES Mario & Contra</ServicesH2>
          <ServicesP>
          Nintendo Entertainment System Mario & Contra made using Arduino.
          </ServicesP>
        </ServicesCard>

      
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Wireless RC Car Race</ServicesH2>
          <ServicesP>
          Four wireless remote controlled cars will race on a track.
          </ServicesP>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
