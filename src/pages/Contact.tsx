import s from "../stores/styling";
import ContactImage from "../assets/images/contactimage02.jpg";
import ContactCard from "../components/ContactCard";
import StartFromTop from "../components/StartFromTop";
import { PopUpBelow } from "../components/FramerMotions/scrollMotions";

export default function Contact() {
  const cardsWithAnimation = [
    <ContactCard
      region="SEOUL"
      address="12, Eulji-ro, Jung-gu, Seoul, Republic of Korea"
      countrycode={82}
      phonenumber="010 1234 5678"
      id="card-seoul"
      lat={37.5663}
      lng={126.9779}
      zoom={16}
    />,

    <ContactCard
      region="BUSAN"
      address="1001 Jungang-daero, Yeonje-gu, Busan, Republic of Korea"
      countrycode={82}
      phonenumber="010 1234 1234"
      id="card-busan"
      lat={35.1798}
      lng={129.0742}
      zoom={16}
    />,

    <ContactCard
      region="OSLO"
      address="Jernbanetorget 1, 0154 Oslo, Norway"
      countrycode={47}
      phonenumber="815 00 888"
      id="card-oslo"
      lat={59.911491}
      lng={10.757933}
      zoom={16}
    />,
  ];

  return (
    <>
      <StartFromTop />
      <s.Contact className="contact-wrapper">
        <s.Image src={ContactImage} alt="photo" className="long-img" />

        <s.Contact className="contact-container">
          <s.Contact className="title">
            <s.StyledH1 className="contact-title">CONTACT &nbsp;US</s.StyledH1>
          </s.Contact>

          <s.Contact className="icon-text-box">
            <s.Atag href="mailto:contact@tapttoo.com" className="light">
              <s.MailIcon className="light" />
              contact@tapttoo.com
            </s.Atag>
          </s.Contact>

          <s.Contact className="icon-text-box">
            <s.Atag
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="light"
            >
              <s.InstagramIcon className="light" />
              tapttoo_official
            </s.Atag>
          </s.Contact>

          {cardsWithAnimation.map((component, index) => (
            <PopUpBelow key={index} delay={index * 0.6}>
              {component}
            </PopUpBelow>
          ))}

        </s.Contact>
      </s.Contact>
    </>
  );
}
