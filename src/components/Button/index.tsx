"use client"

import { JSX } from "react";

interface IButton {
  label: string;
  type: 'flat' | 'contained' | 'text' | "containedBlack";
  onClick?: () => void;
  disabled?: boolean;
  overrideStyle?: React.CSSProperties
  btnActionType?: 'submit' | 'reset' | 'button'
  className?: string
  name?: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

function Button(props: IButton) {
  return (
    <button
      className={`genericBtn px-3  ${props.className} ${props.type}`}
      onClick={() => {
        props.onClick && props.onClick()
      }}
      disabled={props.disabled}
      style={props.overrideStyle}
      type={props.btnActionType || 'button'}
      name={props.name}
    >
      {props.leftIcon && props.leftIcon}
      {props.label}
      {props.rightIcon && props.rightIcon}
    </button>
  );
}

export default Button;