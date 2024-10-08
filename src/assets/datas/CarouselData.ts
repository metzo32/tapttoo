import searchMainImage1 from "../../assets/images/carousel_searchmain_01.jpg";
import searchMainImage2 from "../../assets/images/carousel_searchmain_02.jpg";
import searchMainImage3 from "../../assets/images/carousel_searchmain_03.jpg";
import searchMainImage4 from "../../assets/images/carousel_searchmain_04.jpg";
import searchMainImage5 from "../../assets/images/carousel_searchmain_05.jpg";

interface CarouselDataProps {
    title: string;
    image: string;
  }
const CarouselData: CarouselDataProps[] = [
    {
      title: "We can deliver new way to express yourself",
      image: searchMainImage1,
    },
    {
      title: "You have to keep working on it. Isn't that simple?",
      image: searchMainImage2,
    },
    {
      title: "And with clarity, you can gain conviction",
      image: searchMainImage3,
    },
    {
      title: "Might as well take a chance on doing what you love",
      image: searchMainImage4,
    },
    {
      title: "Ideas don't come out fully formed",
      image: searchMainImage5,
    },
  ];

  export default CarouselData;