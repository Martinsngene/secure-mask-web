/** @format */

// Interface to declare datatypes for buttons
export interface PagePropsI {
  updatePage?: () => void;
}

// Interface to declare datatypes for buttons
export interface ButtonPropsI {
  href?: string;
  label: string;
  isFilled?: boolean;
  src?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Interface for Link Items datatypes. Used in Dashboard

export interface LinkItemPropsI {
  link_text: string;
  href?: string;
  src: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Interface for the Cards
export interface CardPropsI {
  isHome: boolean;
  cardType: string;
  cardBg: string;
}

// Interface for CustomInputs
export interface CustomInputPropsI {
  label?: string;
  id: string;
  htmlFor: string;
  type: string;
  inputValue?: string;
  placeHolder: string;
  containerStyles?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// Interface for CustomSelect
export interface CustomSelectPropsI {
  id?: string;
  defaultValue: string;
  itemsList: string[];
  label?: string;
  labelStyles?: string;
  containerStyles?: string;
}
