import React from "react";
import { clsx } from "clsx";
import styles from "./index.module.scss";

/**
 * ButtonBase Component
 * A reusable button component supporting multiple styles, sizes, and types.
 *
 * @module ButtonBase
 */

/**
 * Props for the ButtonBase component.
 *
 * @typedef {Object} ButtonProps
 * @property {"button" | "a"} [as="button"] - The element type to render, either a `button` or an `a` tag.
 * @property {"button" | "text" | "icon"} [styleType="button"] - The style type of the button. Styling the element to look like a button, ordinary text or just icon
 * @property {"green" | "gray" | "white" | "black"} [color="green"] - The color theme of the button.
 * @property {"medium" | "large"} [size="medium"] - The size of the button.
 * @property {"bold" | "regular"} [font="regular"] - The font style for the button text.
 * @property {string} [className] - Additional class names to style the button.
 * @property {React.ReactNode} [icon] - An optional icon to display inside the button.
 * @property {React.ReactNode} children - The content of the button.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Additional button attributes for `button` element.
 * @property {React.AnchorHTMLAttributes<HTMLAnchorElement>} [props] - Additional anchor attributes for `a` element.
 */
export type ButtonProps = {
  as?: "button" | "a";
  styleType?: "button" | "text" | "icon";
  color?: "green" | "gray" | "white" | "black";
  size?: "medium" | "large";
  font?: "bold" | "regular";
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * A versatile button component with customizable styles, colors, and sizes.
 *
 * @param {ButtonProps} props - The properties object for the ButtonBase component.
 * @returns {JSX.Element} - The rendered button element.
 */
const ButtonBase: React.FC<ButtonProps> = ({
  as = "button",
  color = "green",
  size = "medium",
  font = "regular",
  styleType = "button",
  className,
  icon,
  children,
  ...props
}: ButtonProps) => {
  const Element = as;
  return (
    <Element
      className={clsx(
        styles.button,
        styles[color],
        styles[size],
        styles[font],
        styles[`style-${styleType}`],
        className
      )}
      {...props}
    >
      {icon && <span className={styles["button-icon"]}>{icon}</span>}
      {children}
    </Element>
  );
};

export default ButtonBase;
