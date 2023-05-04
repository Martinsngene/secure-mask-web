/** @format */

// Interface to declare datatypes for buttons
export interface ButtonPropsI {
  label: string;
  isFilled: boolean;
  src: string;
}

// Interface for Link Items datatypes. Used in Dashboard

export interface LinkItemPropsI {
  link_text: string;
  href: string;
  src: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Interface for the Cards
export interface CardPropsI {
  isHome: boolean;
}
