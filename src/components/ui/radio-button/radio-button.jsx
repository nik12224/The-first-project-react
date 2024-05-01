import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "../../styled";

const Label = styled.label`
  display: block;
`;

function RadioButton({
  labelComponent, // компонент для отображения label
  selectValue, // выбранное значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, //
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="radio"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  )
}

export default RadioButton;