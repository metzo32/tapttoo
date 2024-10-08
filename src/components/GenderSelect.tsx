import { useState } from "react";
import s from "../stores/styling";

interface GenderSelectProps {
  onGenderChange: (gender: string) => void;
}

export default function GenderSelect({ onGenderChange }: GenderSelectProps) {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    setSelectedGender(gender);
    onGenderChange(gender);
  };

  return (
    <s.LoginDiv className="radio-container">
      <s.LoginDiv className="radio-box">
        <s.Input
          name="gender"
          type="radio"
          id="gender-male"
          value="male"
          checked={selectedGender === "male"}
          onChange={handleGenderChange}
          required
          className="gender-radio"
        />
        <s.Label htmlFor="gender-male" className="check-label">
          {selectedGender === "male" ? (
              <s.CheckboxAfterIcon className="checkbox-icon-checked" />
            ) : (
              <s.CheckboxBeforeIcon className="checkbox-icon" />
            )}
          Male
        </s.Label>
      </s.LoginDiv>

      

      <s.LoginDiv className="radio-box">
        <s.Input
          name="gender"
          type="radio"
          id="gender-female"
          value="female"
          checked={selectedGender === "female"}
          onChange={handleGenderChange}
          required
          className="gender-radio"
        />
        <s.Label htmlFor="gender-female" className="check-label">
          {selectedGender === "female" ? (
            <s.CheckboxAfterIcon className="checkbox-icon-checked" />
          ) : (
            <s.CheckboxBeforeIcon className="checkbox-icon" />
          )}
          Female
        </s.Label>
      </s.LoginDiv>

      <s.LoginDiv className="radio-box">
        <s.Input
          name="gender"
          type="radio"
          id="gender-other"
          value="other"
          checked={selectedGender === "other"}
          onChange={handleGenderChange}
          required
          className="gender-radio"
        />
        <s.Label htmlFor="gender-other" className="check-label">
          {selectedGender === "other" ? (
            <s.CheckboxAfterIcon className="checkbox-icon-checked" />
          ) : (
            <s.CheckboxBeforeIcon className="checkbox-icon" />
          )}
          Other
        </s.Label>
      </s.LoginDiv>
    </s.LoginDiv>
  );
}
