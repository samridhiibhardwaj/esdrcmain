import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine1,
  topLine2,
  lightText,
  headline1,
  headline2,
  headline3,
  darkText,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine1}</TopLine>
                <Heading lightText={lightText}>{headline1}</Heading>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Heading lightText={lightText}>{headline2}</Heading>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <TopLine>{topLine2}</TopLine>
                <Heading lightText={lightText}>{headline3}</Heading>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
