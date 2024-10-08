import React from "react";
import s from "../stores/styling";
import GridImage01 from "../assets/images/about_03.jpg"
import GridImage02 from "../assets/images/about_04.jpg"
import GridImage03 from "../assets/images/about_05.jpg"
import GridImage04 from "../assets/images/about_06.jpg"
import GridImage05 from "../assets/images/about_07.jpg"

export default function GridBrand() {
  return (
    <s.StyledGrid>
      <s.GridImage src={GridImage01} className="gridimg01" alt="Image 1" />
      <s.GridImage src={GridImage02} className="gridimg02" alt="Image 2" />
      <s.GridImage src={GridImage03} className="gridimg03" alt="Image 3" />
      <s.GridImage src={GridImage04} className="gridimg04" alt="Image 4" />
      <s.GridImage src={GridImage05} className="gridimg05" alt="Image 5" />
    </s.StyledGrid>
  );
}
