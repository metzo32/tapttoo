import styled, { keyframes, css } from "styled-components";
import { Route, Link as RouterLink } from "react-router-dom";
import {
  Green,
  HoverGreen,
  Orange,
  Yellow,
  Grey,
  LightGrey,
  HoverGrey,
  Light,
  White,
  Black,
} from "../stores/colors";
import { RiHomeLine } from "react-icons/ri"; //홈
import { GrSearch } from "react-icons/gr"; //검색
import { RxHamburgerMenu } from "react-icons/rx"; //햄버거
import { IoEyeOutline } from "react-icons/io5";

import { GoPerson } from "react-icons/go";
import { RiMailLine } from "react-icons/ri"; //메일
import { RiInstagramLine } from "react-icons/ri"; //인스타그램
import { BiLogoFacebook } from "react-icons/bi"; //페이스북
import { AiOutlineTikTok } from "react-icons/ai"; //틱톡
import { FaYoutube } from "react-icons/fa6"; //유튜브

import { FiArrowDownRight } from "react-icons/fi"; //대각선 화살표
import { MdOutlineArrowUpward } from "react-icons/md"; // 위 화살표

import { IoIosArrowBack } from "react-icons/io"; // 왼쪽 꺽쇠
import { IoIosArrowForward } from "react-icons/io"; // 오른쪽 꺽쇠

import { TbExclamationMark } from "react-icons/tb"; //느낌표

import { ReactComponent as CheckboxBefore } from "../assets/icons/checkbox-passive.svg";
import { ReactComponent as CheckboxAfter } from "../assets/icons/checkbox-active.svg";

import { ReactComponent as Logo } from "../assets/icons/v.svg";
import { ReactComponent as Tapttoo } from "../assets/icons/Tapttoo.svg";
import { ReactComponent as HeartLine } from "../assets/icons/heart_outlined.svg";
import { ReactComponent as HeartFull } from "../assets/icons/heart_full.svg";

const Engraved = styled.div`
  background-color: #999;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(245, 245, 245, 0.5) 3px 3px 1px;
`;

const infiniteSlideLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const animateIn = keyframes`
  from {
    transform: translateY(150px);
    opacity: 0;
  }
  to {
    transform: translateY(150px);
    opacity: 1;
  }
`;

const animateOut = keyframes`
  from {
    transform: translateY(150px);
    opacity: 1;
  }
  to {
    transform: translateY(150px);
    opacity: 0;
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
 from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
 from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(30px);
    }
`;

const shaking = keyframes`
 0% { transform: translateX(0) }
 25% { transform: translateX(2px) }
 50% { transform: translateX(-2px) }
 75% { transform: translateX(2px) }
 100% { transform: translateX(0) }
`;

const pulse00 = keyframes` 
0% { transform: translate(-50%, -97%) scale(1.0) }
10% { transform: translate(-50%, -97%) scale(1.1) }
100% { transform: translate(-50%, -97%) scale(1) }
`;

const pulse01 = keyframes` 
0% { transform: translate(-50%, -88%) scale(1.0) }
20% { transform: translate(-50%, -88%) scale(1.1) }
100% { transform: translate(-50%, -88%) scale(1) }
`;

const pulse02 = keyframes` 
0% { transform: translate(-50%, -81%) scale(1) }
30% { transform: translate(-50%, -81%) scale(1.1) }
100% { transform: translate(-50%, -81%) scale(1) }
`;

const pulse03 = keyframes` 
0% { transform: translate(-50%, -76%) scale(1) }
40% { transform: translate(-50%, -76%) scale(1.1) }
100% { transform: translate(-50%, -76%) scale(1) }
`;

const Div = styled.div`
  background-color: transparent;

  &.App {
    background-color: ${White};
    position: relative;
    height: auto;
  }

  &.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
  }

  &.profile-image-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin-bottom: 20px;
  }

  &.profile-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  &.profile-placeholder {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Grey};
    color: white;
    font-size: 1.5em;
    border-radius: 50%;
  }

  &.profile-sidebar-container {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
  }

  &.profile-grid-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.new-img-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &.test {
    width: 100%;
    font-size: 200px;
    margin-top: 1000px;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1em;
  opacity: 0;

  &.FadeIn {
    animation: ${animateIn} 0.3s ease-in-out forwards;
  }

  &.FadeOut {
    animation: ${animateOut} 0.2s ease-in-out forwards;
  }
`;

const Line = styled.div`
  &.light {
    width: 100%;
    height: 2px;
    background-color: ${White};
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  &.dark {
    width: 100%;
    height: 2px;
    background-color: ${Grey};
    margin: 0;
    display: block;
  }

  &.infinite {
    width: 100%;
    height: 2px;
    background-color: ${LightGrey};
    margin: 0;
    display: block;
  }
`;

const Atag = styled.a`
  font-size: 1.1em;
  color: ${Grey};
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;

  :hover {
    color: ${HoverGrey};
  }

  &.light {
    color: ${LightGrey};
    text-transform: lowercase;

    :hover {
      color: ${Grey};
    }
  }

  &.artist-contact-right {
    white-space: nowrap;
    font-size: 1em;
    margin-right: 8px;
    text-transform: none;
    cursor: pointer;

    &:hover {
      color: ${HoverGrey};
    }
  }
`;

const HeaderDiv = styled.div`
  &.wrapper {
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 0px;
    z-index: 5;
  }

  &.button-wrapper {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    justify-content: space-between;
    align-items: center;
  }
`;

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;

  &.wrapper {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: column;
    display: flex;

    margin: 0 auto;
  }

  &.title-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  &.description {
    width: 50%;
    display: flex;
    justify-content: flex-start;

    &.alignLeft {
      justify-content: flex-start;
    }

    &.alignRight {
      justify-content: flex-end;
    }
  }

  &.column {
    width: 57.8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
  }

  &.mid-title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 0;
    padding-left: 5px;
  }

  &.service-wrapper {
    width: 29.48%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  &.bottom-title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 200px;
  }

  &.column-display {
    flex-direction: column;
    margin-left: 5px;
  }

  &.button-box {
    width: 200px;
    margin-bottom: 20px;
  }

  &.box {
    flex-direction: column;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  position: relative;

  &.section-main {
    margin-top: 50px;
  }
`;

const SectionFrame = styled.div`
  display: flex;

  &.right {
    display: flex;
    flex-direction: column;
    margin-left: 500px;
  }

  &.carousel-frame {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.career-img-wrapper {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;

    display: flex;
    justify-content: space-between;
  }

  &.career-img-items {
    width: calc(100% / 4);
    aspect-ratio: 1 / 1;
  }
`;

const LongImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  margin-bottom: 150px;
  position: relative;

  &.contact {
    margin: 0;
  }
`;

const BrandTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  &.MarginBottom {
    margin-bottom: 200px;
  }
`;

const StyledH1 = styled.h1`
  color: ${Green};
  font-size: 16em;
  letter-spacing: -0.085em;
  font-weight: 400;
  line-height: 140px;
  margin: 0px;
  transform: scaleX(1);
  transform-origin: center;

  &.login-title {
    font-size: 8em;
    white-space: nowrap;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  &.brand-title {
    line-height: 240px;
  }

  &.career-title {
    line-height: 200px;
    margin-bottom: 200px;
  }

  &.career-detail-title {
    font-size: 9em;
    text-align: left;
    text-transform: uppercase;

    &.mid {
      font-size: 6em;
      line-height: 90px;
    }
  }

  &.new-artists-title {
    font-size: 9em;
    text-align: left;
  }

  &.contact-title {
    width: 900px;
    font-size: 9em;
    text-align: right;
    color: ${Grey};
    margin: 40px 0px 20px 0px;
  }

  &.article-name {
    box-sizing: content-box;
    color: ${White};
    opacity: 0.5;
    font-size: 10em;
    text-align: center;
    line-height: 110px;
    text-align: right;
    white-space: nowrap;
  }

  &.artist-page-title {
    text-align: left;
    color: ${Grey};
    font-size: 10em;
    letter-spacing: -0.08em;
    margin-left: 10px;
  }

  &.warning {
    font-size: 2em;
    font-weight: 400;
    line-height: 2em;
  }
`;

const StyledH2 = styled.h2`
  letter-spacing: -0.05em;

  &.gradient-title {
    overflow: visible;
    font-size: 4.5em;
    font-weight: 300;
    line-height: 80px;
    margin-top: 120px;
    margin-bottom: 200px;

    transform: scaleX(1);
    transform-origin: center;

    background: -webkit-linear-gradient(
      170deg,
      rgba(46, 116, 47, 1) 40%,
      rgba(141, 194, 139, 1) 60%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background: linear-gradient(
      170deg,
      rgba(46, 116, 47, 1) 40%,
      rgba(141, 194, 139, 1) 60%
    );
    background-clip: text;
    color: transparent;
  }

  &.bold {
    width: 100%;
    font-size: 11em;
    line-height: 170px;
    margin-bottom: 0px;
    padding-bottom: 20px;
  }

  &.accordion-title2 {
    display: inline-block;
    width: 100%;
    height: 100px;
    cursor: pointer;

    color: ${Grey};
    font-size: 5em;
    letter-spacing: -0.05em;
    font-weight: 400;
    text-align: left;
    padding: 0;
    margin: 0;

    &.active {
      color: blue;
    }
  }

  &.artist-name {
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -0.05em;
  }

  &.contact-card-title {
    width: 100%;
    font-size: 3em;
    letter-spacing: -0.05em;
    text-align: left;
  }

  &.artist-page-semititle {
    width: 65%;
    font-size: 1.8em;
    font-weight: 500;
    color: ${Grey};
    line-height: 35px;
    text-align: left;
  }
`;

const StyledH3 = styled.h3`
  color: ${Green};
  font-size: 3.3em;
  letter-spacing: -0.05em;
  font-weight: 400;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  display: flex;
  transform: scaleX(1);
  transform-origin: center;

  &.mid-category {
    width: 100px;
    color: ${Grey};
    font-size: 1.5em;
    font-weight: 500;
    line-height: 30px;
  }

  &.carousel-title {
    width: 50%;
    font-family: "Archivo Black", sans-serif;
    font-weight: 600;
    font-size: 4em;
    line-height: 70px;
    color: ${White};
    white-space: normal;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translate(0, -100%);
  }

  &.search-title {
    font-family: "Archivo Black", sans-serif;
    font-weight: 600;
    font-size: 4em;
    color: ${Grey};

    &.margin {
      margin: 50px 0px 150px 0px;
    }
  }
`;

const StyledH4 = styled.h4`
  width: auto;
  color: ${Green};
  font-size: 3.3em;
  letter-spacing: -0.05em;
  line-height: 55px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  padding: 0;
  margin: 0;

  &.SemiTitle {
    font-size: 4em;
    line-height: 65px;
  }

  &.artist-detail-header {
    color: ${Grey};
    font-size: 1.7em;
    font-weight: 600;
    line-height: 30px;
  }

  &.event-title {
    font-size: 1.2em;
    color: ${Grey};
  }

  &.today-title {
    font-size: 2.5em;
    color: ${Grey};
  }
`;

const StyledP = styled.p`
  color: ${Grey};
  font-size: 1.3em;
  font-weight: 300;
  text-align: left;
  line-height: 30px;

  padding: 0;

  &.about-first-title {
    font-size: 1.5em;
    text-align: center;
    line-height: 40px;

    margin-top: 50px;
    margin-bottom: 30px;
  }

  &.about-last-title {
    font-size: 1.5em;
    color: ${Green};
    text-align: center;
    margin: 40px 0 40px 0;
  }

  &.section-p {
    line-height: 30px;
    margin: 20px 0 20px 5px;
  }

  &.article-text {
    text-align: right;
    font-size: 2em;
    font-weight: 200;
    color: ${White};
    opacity: 0.4;
    position: absolute;
    bottom: 0;
  }

  &.career-info {
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &.accordion-number {
    display: inline;
    width: auto;
    height: 20px;
    margin: 10px 30px 0px 15px;
  }

  &.card-title {
    font-weight: 500;
    font-size: 2em;
    margin-top: 30px;
    letter-spacing: -0.5px;
  }

  &.card-semititle {
    font-size: 1.2em;
    line-height: 25px;
    opacity: 0.7;
    margin-top: 10px;
  }

  &.card-text {
    line-height: 25px;
  }

  &.hashtag {
    margin: 10px 0px 10px 0px;
  }

  &.contact-info {
    font-size: 1.1em;
    text-transform: uppercase;
  }

  &.footer-copyright {
    font-size: 1.1em;
    width: auto;
  }

  &.artist-contact-left {
    white-space: nowrap;
    font-size: 1.3em;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
  }

  &.artist-interview {
    font-size: 1em;
  }

  &.number {
    font-size: 1em;
    font-weight: 500;
  }

  &.modal {
    font-size: 1em;
    line-height: 22px;
    text-align: center;
  }

  &.event-name {
    font-size: 2.6em;
    font-weight: 500;
    letter-spacing: -0.05em;
  }

  &.event-city {
    font-size: 1em;
  }

  &.event-text {
    font-size: 1.5em;
  }

  &.infinite-text {
    font-family: "Tourney", sans-serif;
    font-size: 4em;
    font-weight: 200;
    color: ${LightGrey};
    white-space: nowrap;

    animation: ${infiniteSlideLeft} 24000s linear infinite;
  }
`;

const Mask = styled.div`
  &.mask-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    position: relative;
    top: 40%;
  }

  &.mask-container {
    min-height: 100vh;
    padding: clamp(1rem, 2vw, 5rem);
    display: flex;
    align-items: center;
  }

  &.circle-mask {
    --clip: circle(600px at 50%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      306deg,
      rgba(246, 105, 0, 1) 0%,
      rgba(245, 139, 46, 1) 50%,
      rgba(245, 86, 46, 1) 100%
    );
    -webkit-clip-path: var(--clip);
    clip-path: var(--clip);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MaskText = styled.p`
  font-family: "DM Serif Display", serif;
  color: ${Green};
  font-size: 48em;
  letter-spacing: -0.05em;
  font-weight: 400;
  line-height: 110px;
  margin: 0px;

  transform: scaleX(1);
  transform-origin: center;

  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.masked {
    color: ${White};
  }
`;

const ArtistReg = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &.artist-wrapper {
    margin-top: 10px;
    position: relative;
  }

  &.bg-filter {
    width: 95%;
    height: 100vh;
    background: rgb(64, 169, 62);
    background: linear-gradient(
      135deg,
      rgba(64, 169, 62, 1) 0%,
      rgba(72, 186, 255, 1) 50%
    );
    opacity: 0.5;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const ProfileWrapper = styled.div`
  width: 100%;
  // height: calc(100vh - 130px);
  height: auto;
  display: flex;
  flex-direction: row;
`;

const ProfileSideBarWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  z-index: 4;
  margin-left: 20px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;
const ColumnWrapper = styled.div`
  width: 57.8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-start;

  &.profileinfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CareerDiv = styled.div`
  &.career-row {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
    position: relative;
  }

  &.career-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const CareerItem = styled.div`
  width: calc(100% / 4);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  filter: brightness(1);
  cursor: pointer;

  :hover {
    filter: brightness(0.5);
    transition: 0.3s ease;
  }

  &.half {
    width: calc(100% / 2);
    height: 800px;
    aspect-ratio: 1 / 1;
  }
`;

const CareerP = styled.p`
  font-size: 2em;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%) scale(1);
  background-color: transparent;
  padding: 10px;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  ${CareerItem}:hover & {
    transform: translate(-50%, -80%) scale(1.5);
    transition: 0.3s ease;
  }
`;

const Accordion = styled.div`
  &.acc {
    max-height: auto;
    position: relative;
  }

  &.acc-open {
    max-height: auto;
    padding-bottom: 50px;
    position: relative;
  }
`;

const CareerDetail = styled.div`
  width: 100%;
  height: 100vh;

  &.wrapper {
    width: 100%;
    height: auto;
  }

  &.img-container {
    width: 100%;
    height: auto;
  }

  &.item-box {
    width: calc(100% - 40px);
    height: 90px;
    display: flex;
    transition: transform 0.3s ease;
  }

  &.accordion-wrapper {
    width: calc(100% - 40px);
    height: auto;
    padding: 30px 20px 15px 20px;
    display: flex;
    flex-direction: column;

    &:hover .accordion-number {
      transition: transform 0.3s ease;
      transform: translateY(-5px);
      color: ${Green};
    }

    &:hover .accordion-title2 {
      transition: transform 0.3s ease;
      transform: translateY(-5px);

      background: -webkit-linear-gradient(
        170deg,
        rgba(46, 116, 47, 1) 40%,
        rgba(141, 194, 139, 1) 60%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      background: linear-gradient(
        170deg,
        rgba(46, 116, 47, 1) 40%,
        rgba(141, 194, 139, 1) 60%
      );
      background-clip: text;
      color: transparent;
    }
  }

  &.accordion-item {
    width: calc(100% - 40px);
    height: auto;
    margin: 0 20px 0 0;
    position: relative;
  }

  &.accordion-border {
    width: 98%;
    height: 20px;
    position: absolute;
    left: 13px;
    border: 4px solid ${Grey};
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &.cardbox {
    width: calc(100% - 40px);
    max-height: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    margin-top: 0px;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  &.cardbox-open {
    width: calc(100% - 40px);
    max-height: 980px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;

    overflow: visible;
    transition: 0.3s ease, opacity 0.3s ease;
  }

  &.card-item-container {
    width: 500px;

    height: 500px;
    position: relative;
    top: 180px;
  }

  &.card-title-box {
  }

  &.card-text-box {
  }

  &.card-item,
  &.card-item-next {
    width: 460px;
    height: 460px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba(238, 237, 235, 0.8);
    border: 1px solid ${Grey};
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &.card-item {
    z-index: 2;
    opacity: 1;
  }

  &.card-item-next {
    z-index: 1;
    opacity: 0;
    box-shadow: 10px 10px 20px rgba(110, 101, 90, 0.7);
  }

  .cardImage {
    width: 460px;
    height: 460px;
    border-radius: 10px;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.5;
    overflow: hidden;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .card-item-container:hover .card-item {
    opacity: 0;
    transform: translateX(30px) translateY(200px) rotate(2deg);
  }

  .card-item-container:hover .card-item-next {
    background-color: rgba(238, 237, 235, 1);
    opacity: 1;
    transform: translateX(30px) translateY(200px) rotate(2deg);
    z-index: 3;
  }

  .card-item-container:hover .cardImage {
    opacity: 1;
    z-index: 3;
    transform: translateX(-25px) translateY(-100px) rotate(-5deg);
  }

  .mid-title-container {
    height: 200px;
    margin-top: 200px;
  }
`;

const Username = styled.div`
  font-size: 2em;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin; 0;
    position: relative;

    &.section-ul {
        height: 120px;
        margin-top: 30px;
        justify-content: space-between;
    }

    &.nav-menu-items {
        display: flex;
        justify-content: flex-start;
        width: 200px;
        height: 100%;
    }

    &.article-ul {
      display: flex;
      padding: 0;
      margin; 0;
      position: relative;
    }
`;
const StyledLi = styled.li`
  color: ${Green};
  font-size: 1em;
  margin-bottom: 5px;

  &.name-li {
    color: ${HoverGrey};
  }

  &.square-test {
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100%);
    height: calc(100vh - 50px - 2px);
    margin: 0;
    display: flex;
  }
`;

const ArticleCard = styled.div`
  position: relative;
  width: calc(100% - 2px);
  height: calc(100vh - 50px - 2px);
`;

const Image = styled.img`
  width: 100%;
  // margin-bottom: 300px;

  &.register-bg01 {
    width: 800px;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    transform: translate(180%, -50px);
  }

  &.register-bg02 {
    width: 800px;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    transform: translate(-31%, -50px);
  }

  &.BrandMidImage {
    height: auto;
    object-fit: cover;
  }

  &.LongImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.artist-bg {
    width: 100%;
    opacity: 0.6;
  }

  &.article-fetched-img {
    overflow: hidden;
    margin: 0;
  }

  &.card-image {
    object-fit: cover;
    overflow: hidden;
  }

  &.new-artist-img {
    width: calc(100% / 3);
    margin: 0;
    object-fit: cover;
  }

  &.test {
    height: 1500px;
    object-fit: cover;
    margin-top: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.test-carousel {
    width: 100%;
  }

  &.artist-page-main {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  &.search-circle-profile {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  &.search-square {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    overflow: hidden;

    &.hover-event {
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(0.5);
      }
    }
  }

  &.search-wide {
    width: 100%;
  }
`;

const InfiniteText = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  user-select: none;

  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    animation: ${FadeIn} 0.1s ease-in-out forwards;
    z-index: 10;

    &.closing {
      animation: ${FadeOut} 0.8s forwards;
    }
  }

  &.modal-wrapper {
    width: 400px;
    height: 400px;
    background-color: ${Light};
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    position: fixed;
    animation: ${slideUp} 0.2s ease-in-out;

    &.closing {
      animation: ${slideDown} 0.5s forwards;
    }
  }

  &.circle {
    width: 90px;
    height: 90px;
    background-color: ${Yellow};
    border-radius: 50%;
    border: 3px solid ${Light};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -254%);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.modal-container {
    width: 300px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
  }

  &.checkbox-container {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.text-box {
  }
`;

const Echo = styled.div`
  &.wrapper {
    width: 200px;
    height: 100px;
    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -200%);
  }

  &.circle00 {
    width: 98px;
    height: 98px;
    background-color: ${Yellow};
    opacity: 0.5;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -97%);

    animation: ${pulse00} 1s infinite;
  }

  &.circle01 {
    width: 120px;
    height: 120px;
    background-color: ${Yellow};
    opacity: 0.3;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -88%);

    animation: ${pulse01} 1s infinite;
  }

  &.circle02 {
    width: 140px;
    height: 140px;
    background-color: ${Yellow};
    opacity: 0.2;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -81%);

    animation: ${pulse02} 1s infinite;
  }

  &.circle03 {
    width: 160px;
    height: 160px;
    background-color: ${Yellow};
    opacity: 0.1;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -76%);

    animation: ${pulse03} 1s infinite;
  }
`;

const Home = styled.div`
  &.home-wrapper {
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &.image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Search = styled.div`
  margin: 0;

  &.search-wrapper {
    width: 100%;
    height: auto;
    margin-top: 30px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &.top-container {
    width: 100%;
    height: auto;
    aspect-ratio: 4/1;
    margin-bottom: 150px;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid pink;

    &.main {
      width: calc(100% - 160px);
      margin: 0px 80px;
      aspect-ratio: 4/1;
    }

    &.column {
      flex-direction: column;
      align-items: center;
    }
  }

  &.circles-container {
    width: 100%;
    height: 200px;
    border: 1px solid yellow;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &.extra-margin {
    width: calc(100% - 160px);
    height: 900px;
    margin: 0px 80px 150px 80px;
    border: 1px solid yellow;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &.mid-conatiner {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid red;

    &.left {
      width: calc(60% - 28px);
    }

    &.right {
      width: calc(40% - 28px);
    }
  }

  &.search-container {
    width: 100%;
    height: 100px;

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.circle-profile-box {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 0px 80px 0px 0px;
  }

  &.item-box {
    display: flex;
    height: auto;
    flex-direction: row;
    border: 1px solid green;
  }

  &.text-box {
    width: 50%;
    height: 100%;
    border: 1px solid purple;
  }

  &.line-box {
    width: calc(100% - 160px);
    height: auto;
    margin: 0px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.event-wrapper {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.event-container {
    width: 95%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  &.event-title-box {
    width: 20%;
    height: 100%;
    margin-left: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.event-image-box {
    width: 30%;
    height: 100%;
  }

  &.event-text-box {
    width: 50%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  &.today-container {
    width: 700px;
  }

  &.today-image-container {
    aspect-ratio: 1/1;
  }

  &.arrow {
    height: 70%;
  }

  &.review-container {
    border: 1px solid blue;
    width: 35%;
  }

  &.review-image-container {
    height: 70%;
    border: purple;
  }
`;

const ArticleGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ArticleDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  &.wrapper {
    flex-direction: column;
  }

  &.mid-wrapper {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &.article-cards {
    width: 50%;
    aspect-ratio: 1 / 1;
    margin: 0;
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;

    &:hover .article-grid-image {
      filter: brightness(0.6);
    }

    &:hover .article-name {
      font-size: 15em;
      opacity: 1;
      transition: 0.3s ease;
    }

    &:hover .article-text {
      font-size: 1.3em;
      opacity: 1;
      transition: 0.3s ease;
    }
  }

  &.article-grid-image {
    position: absolute;
    z-index: 1;
    object-fit: cover;
    overflow: hidden;
  }

  &.article-text-container {
    width: 100%;
    height: 20%;
    margin: 0;
    box-sizing: content-box;

    position: absolute;
    bottom: 3%;
    right: 1%;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ArtistDiv = styled.div`
  &.wrapper {
    width: 100%;
    margin-bottom: 100px;
  }

  &.h2-container {
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 0 10px;
  }

  &.atags-container {
    width: 30%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    align-items: flex-end;
  }

  &.atags-box {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &.img-wrapper {
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin-top: 50px;
  }

  &.title-wrapper {
    display: flex;
  }

  &.title-container-left {
    width: 100%;
    height: 400px;
  }

  &.title-container-right {
    width: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
  }

  &.button-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  &.mid-wrapper {
    display: flex;
    flex-direction: row;
    width: calc(100% - 80px);
    min-height: 680px;
    height: auto;
    padding: 40px;
  }

  &.mid-line {
    width: 2px;
    background-color: ${Grey};
    margin: 0 40px 0 0;
  }

  &.mid-left {
    width: 30%;
    height: 100%;
    min-height: 680px;
  }

  &.mid-right {
    width: calc(70% - 40px);
    height: 100%;
    min-height: 680px;
  }

  &.mid-container {
    height: auto;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
  &.mid-container:last-of-type {
    margin: 0;
  }

  &.h4-box {
    height: auto;
    margin: 10px 0 10px 0;
  }

  &.center-box {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.p-box-line {
    width: 100%;
    border-bottom: 1px solid ${Grey};

    &.last {
      border: none;
    }
  }

  &.p-box {
    width: 100%;
    height: auto;
    min-height: 130px;
    margin-bottom: 50px;
  }

  &.bottom-wrapper {
    width: 100%;
    height: 500px;
  }
`;

const Carousel = styled.div`
  &.carousel-wrapper {
    position: relative;
    height: 100%;
    aspect-ratio: 4/1;
    overflow: hidden;
    margin: 0 auto;
  }

  &.carousel-box {
    display: flex;
  }

  &.carousel-item {
    width: 100%;
    height: 200px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none; // 이 속성을 넣어야 화면에 1개씩 보여진다.
  }

  &.data {
    width: 100%;
    position: relative;
    border: 1px solid red;
  }

  &.progress-box {
    width: 90px;
    position: absolute;
    bottom: 120px;
    right: 50px;
    z-index: 1;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 500px;
`;

const WishIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

const ClickAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const WishIconLine = styled(HeartLine)`
  width: 100%;
  height: 100%;
  fill: ${White};
  opacity: 0.6;
`;

const WishIconHover = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: ${White};
`;

const WishIconClicked = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: ${Orange};
  animation: ${ClickAnimation} 0.3s ease-in-out;
`;

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  padding: 0;

  &.sidebar-dark {
    width: 200px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: content-box;
    position: fixed;
    top: 48px;

    z-index: 5;

    pointer-events: none;
  }

  &.sidebar-box {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  &.sidebar-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

const NavBar = styled.nav`
  background-color: ${White};
  font-size: 1em;
  height: 100%;

  display: flex;
  justify-content: flex-start;

  position: absolute;
  z-index: 3;

  &.nav-menu {
    left: -120%;
    transition: ease 0.3s;
    opacity: 0;
    visibility: hidden;

    &.active {
      left: 0;
      transition: ease 0.3s;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

const SidebarLi = styled.li`
  margin-top: 15px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${HoverGrey};
  z-index: 3;
  opacity: 0.3;
  transition: opacity 0.3s ease;
`;

const TapttooIcon = styled(Tapttoo)`
  width: 6em;
  height: 100px;
  margin: 0 auto;
  display: block;
`;

const StyledLink = styled(RouterLink)`
  &.menu-texts {
    text-decoration: none;
    color: ${Grey};
    margin-left: 20px;
    padding: 10px 20px;
    white-space: nowrap;

    &:hover {
      color: ${HoverGrey};
    }
  }

  &.close-arrow {
    margin-left: 150px;
  }
`;

const HomeImage = styled.img`
  &.LayeredImage01 {
    width: 700px;
    position: absolute;
    left: 23%;
    bottom: -20%;
    z-index: 2;
  }

  &.LayeredImage02 {
    width: 700px;
    position: absolute;
    left: 43%;
    bottom: 4%;
    z-index: 1;
  }
`;
const MainImage = styled.img`
  width: 100%;
  border-bottom-right-radius: 50% 95%;
  border-bottom-left-radius: 50% 95%;
  margin-top: 20px;
`;

const Footer = styled.div`
  &.wrapper {
    width: 100%;
    height: 70px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    opacity: 0.8;

    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0;
  }

  &.container {
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.footer-icon-box {
    width: 165px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.footer-box-left {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.footer-box-right {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.brand-wrapper {
    color: ${Grey};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 60px;
  }

  &.button-wrapper {
    display: flex;
    height: 30px;
    flex-direction: row;
    align-items: center;
  }

  &.copyright {
    color: ${Grey};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    white-space: nowrap;
  }
`;

const BrandLogo = styled(Logo)`
  width: 1.5em;
  height: 1.5em;
  fill: ${Grey};
`;

const BrandText = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin-left: 5px;
`;

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 75vh;

  &.career-wrapper {
    width: 100%;
  }
`;

const Contact = styled.div`
  &.contact-wrapper {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  &.contact-container {
    width: calc(100% - 20px);
    padding: 0px 10px 0px 10px;
  }

  &.title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &.line {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 20px 0px 20px 0px;
  }

  &.icon-text-box {

    :hover: {
        color: red;
    }
}
    
  }

  &.card-wrapper {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;

    margin-bottom: 100px;
  }

  &.card-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  &.card-box-left {
    width: 50%;
    height: calc(50% - 20px);
    position: relative;
  }

  &.card-box-right {
    width: 50%;
    height: 100%;
  }

  &.maps {
    height: 100%;
  }

  &.contact-info-box {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    position: absolute;
    left: 0;
    bottom: -250px;
  }
`;

const hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #acafb0;
  margin: 0 2% 0 2%;

  &.footer {
    width: calc(100% - 400px);
  }

  &.double {
    height: 2px;
    margin: 1px 120px 0 0;
  }

  &.upper-line {
    margin: 100px 0px 20px 0px;
  }

  &.lower-line {
    margin: 20px 0px 10px 0px;
  }

  &.card-line {
    width: calc(100% - 10px);
    margin: 0px 0px 10px 0px;
  }

  &.artist-page {
    width: 99%;
    margin: 0;
  }
`;

const PolicyWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  &.login {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
`;

const LoginDiv = styled.div`
  &.wrapper {
    width: 100%;
    height: 792px;
    display: flex;
  }

  &.container {
    width: 300px;
    height: 700px;
    padding: 20px 50px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: scale(1.02);
      transition: 0.4s ease;
    }

    &.login-page {
      height: 460px;
      padding: 120px 50px;
    }

    &.step01 {
      height: 540px;
      padding: 80px 50px;
    }

    &.step02 {
      height: 620px;
      padding: 30px 50px 50px 50px;
    }
  }

  &.input-wrapper {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-top: 20px;

    &.login-page {
       border: 1px solid red;
    }

    &.step01 {
      height: 260px;
    }

    &.step02 {
      height: 365px;
    }

    &.login-page-box {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  }

  &.input-box {
    width: 300px;
    height: 25px;
    position: relative;
    display: flex;
    border-bottom: 2px solid ${Grey};
    
    &.phonenumber-box {
      width: 200px;
      position: relative;
      display: flex;
      border-bottom: 2px solid ${Grey};
      margin: 25px 0px 25px 15px;
    }
  }

  &.number-box {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

     &.valid Select {
      border: 2px solid ${Green};
    }

    &.invalid Select {
      border: 2px solid ${Orange};
      animation: ${shaking} 0.2s infinite;
    }
    }
  }

  &.countrycode-box {
    width: 90px;
    display: flex;
  }

  &.item-box {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &.checkbox-box {
    color: ${Grey};
    width: auto;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.button-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
  
  &.button-wrapper {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    &.login {
      height: 180px;
    }
  }

  &.calandar-container {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.valid Select {
      border: 2px solid ${Green};
    }

    &.invalid Select {
      border: 2px solid ${Orange};
      animation: ${shaking} 0.2s infinite;
    }
  }

  &.calandar-item-box {
  }

  &.radio-container {
    width: 90%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;

    Input, Label {
    cursor: pointer;
    }
  }

  &.radio-box {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Select = styled.select`
  width: 90px;
  height: 30px;
  color: ${Grey}
  outline: 0;
  border: 2px solid ${Grey};
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
`;

const Option = styled.option``;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  cursor: pointer;

  &.loginpage {
    width: 100%;
    height: 30px;
  }

  &.input-hide {
    display: none;
  }

  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: ${LightGrey};
  }

  &.modal-check {
    display: none;
  }

  &.gender-radio {
    display: none;
  }
`;

const Label = styled.label`
  color: ${Grey};
  letter-spacing: -0.1px;

  &.login-info {
    position: absolute;
    top: 10px;
    left: 0px;
    transform: translateY(-30%);
    pointer-events: none;
    transition: 0.3s ease;

    ${Input}:focus + &,
    &.active {
      top: -20px;
      transform: translateY(0%);
      color: ${Grey};
    }

    &.active.valid {
      color: ${Green};
    }

    &.active.invalid {
      color: ${Orange};
      animation: ${shaking} 0.2s infinite;
    }
  }

  &.invalid {
    color: ${Orange};
    animation: ${shaking} 0.2s infinite;
  }

  &.remember {
    font-size: 0.8em;
    margin-top: 3px;
  }

  &.understand {
    width: 100px;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: ${HoverGrey};

      .checkbox-icon-checked {
        color: ${HoverGreen};
      }
    }

    .checkbox-icon-checked {
      color: ${Green};
    }
  }

  &.gender-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: ${HoverGrey};

      .checkbox-icon-checked {
        color: ${HoverGreen};
      }
    }

    .checkbox-icon-checked {
      color: ${Green};
    }
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  height: 40px;
  color: ${Grey};
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &.left {
    position: absolute;
    left: 0;
    top: 0;
  }

  &.Round {
    color: ${Green};
    border: 2px solid ${Green};
    border-radius: 100px;
    padding: 8px 20px 8px 20px;

    &:hover {
      color: ${White};
      background-color: ${HoverGreen};
      border-color: ${HoverGreen};
      transition: 0.3s ease;
    }
  }

  &:hover {
    color: ${HoverGrey};
  }

  &.header-button-item {
    padding: 0;
    width: 55px;
    height: 100%;
    margin-right: 20px;

    &:last-child {
      margin: 0;
    }
  }

  &.carousel-btn-left {
    position: absolute;
    z-index: 1;

    bottom: 0;
    left: 0;
    transform: translateY(-58%);
  }

  &.carousel-btn-right {
    position: absolute;
    z-index: 1;

    bottom: 0;
    right: 0;
    transform: translateY(-58%);
  }

  &.scroll-top-btn {
    width: 60px;
    height: 60px;
    color: ${Green};
    padding: 0;
    background-color: rgba(238, 237, 235, 0.6);
    border: 3px solid ${Green};
    border-radius: 50%;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: center;
    bottom: 10%;
    left: 92%;
    z-index: 5;

    &:hover {
      color: ${White};
      background-color: rgba(238, 237, 235, 0.9);
      transition: 0.3s ease;
    }
  }
`;

const StyledGrid = styled.div`
  width: 100%;
  min-width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 300px;
`;

const ProfileGrid = styled.div`
  width: 1000px;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;

  overflow: hidden;
`;

const GridImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  &.gridimg01 {
    grid-column: 1 / 4;
    grid-row: 1;
  }

  &.gridimg02 {
    grid-column: 4 / 6;
    grid-row: 1;
  }

  &.gridimg03 {
    grid-column: 1 / 6;
    grid-row: 2;
  }

  &.gridimg04 {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  &.gridimg05 {
    grid-column: 3 / 6;
    grid-row: 3;
  }

  &.gridlikeimg01 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &.gridlikeimg02 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &.gridlikeimg03 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

const StyledIcon = `
  width: 1.4em;
  height: 1.4em;
  fill: ${Grey};
  color: ${Grey};

  &.outlined {
    width: 1.2em;
    height: 1.2em;
    border-radius: 100px;
    border: 1px solid ${Grey};
    padding: 5px;
    
        &:hover {
        fill: ${HoverGrey};
        border: 1px solid ${HoverGrey};
    }
  }
`;

const StyledHeaderIcon = `
    width: 2em;
    height: 2em;
    fill: ${Grey};
    color: ${Grey};

    &:hover {
        fill: ${HoverGrey};
        color: ${HoverGrey};
    }
`;

const LeftIcon = styled(IoIosArrowBack)`
  ${StyledIcon}
  fill: white;
  width: 3em;
  height: 3em;
`;

const RightIcon = styled(IoIosArrowForward)`
  ${StyledIcon}
  fill: white;
  width: 3em;
  height: 3em;
`;

const CheckboxBeforeIcon = styled(CheckboxBefore)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const CheckboxAfterIcon = styled(CheckboxAfter)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

//Header Icons
const HomeIcon = styled(RiHomeLine)`
  ${StyledHeaderIcon}
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
  ${StyledHeaderIcon}
`;

const EyeIcon = styled(IoEyeOutline)`
  ${StyledHeaderIcon}
`;

const SearchIcon = styled(GrSearch)`
  ${StyledHeaderIcon}
  width: 1.8em;
  height: 1.8em;
`;

const ProfileIcon = styled(GoPerson)`
  ${StyledHeaderIcon}
  width: 2.2em;
  height: 2.2em;
`;

//Footer Icons
const FaceBookIcon = styled(BiLogoFacebook)`
  ${StyledIcon}
`;

const TiktokIcon = styled(AiOutlineTikTok)`
  ${StyledIcon}
`;

const InstagramIcon = styled(RiInstagramLine)`
  ${StyledIcon}

  &.light {
    fill: ${LightGrey};
  }
`;

const ArrowIcon = styled(FiArrowDownRight)`
  ${StyledIcon}
  fill: none;
  margin: 2px 40px 0 0;
  width: 1.7em;
  height: 1.7em;
`;

const MailIcon = styled(RiMailLine)`
  ${StyledIcon}

  &.light {
    fill: ${LightGrey};
  }
`;

const YoutubeIcon = styled(FaYoutube)`
  ${StyledIcon}
`;

const TopArrowIcon = styled(MdOutlineArrowUpward)`
  ${StyledIcon}
  fill: ${Green};
  width: 2.5em;
  height: 2.5em;
`;

const WarnIcon = styled(TbExclamationMark)`
  font-size: 100px;
  color: ${White};
`;

const s = {
  Engraved,
  ArticleCard,
  Accordion,
  ArticleDiv,
  ArticleGrid,
  ArtistDiv,
  ArtistReg,
  AboutDiv,
  Line,
  Atag,
  BrandLogo,
  BrandText,
  BrandTitleWrapper,
  Button,
  CareerDetail,
  CareerDiv,
  CareerItem,
  CareerP,
  Carousel,
  ColumnWrapper,
  Contact,
  Div,
  Footer,
  Form,
  GridImage,
  HeaderDiv,
  InfiniteText,
  Modal,
  Echo,
  Home,
  Search,
  HomeImage,
  hr,
  Image,
  Select,
  Option,
  Input,
  Label,
  LoginDiv,
  LongImgWrapper,
  MainImage,
  Map,
  Mask,
  MaskText,
  NavBar,
  Overlay,
  PageWrapper,
  PolicyWrapper,
  ProfileGrid,
  ProfileSideBarWrapper,
  ProfileWrapper,
  RowWrapper,
  SectionContainer,
  SectionFrame,
  SideBar,
  SidebarLi,
  Span,
  StyledGrid,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledLi,
  StyledLink,
  StyledP,
  StyledUl,
  TapttooIcon,
  Username,
  WishIconContainer,

  LeftIcon,
  RightIcon,

  CheckboxBeforeIcon,
  CheckboxAfterIcon,

  HomeIcon,
  HamburgerIcon,
  EyeIcon,
  SearchIcon,
  ProfileIcon,
  FaceBookIcon,
  TiktokIcon,
  InstagramIcon,
  ArrowIcon,
  MailIcon,
  YoutubeIcon,
  WishIconLine,
  WishIconHover,
  WishIconClicked,
  StyledIcon,
  StyledHeaderIcon,
  TopArrowIcon,
  WarnIcon,
};

export default s;
