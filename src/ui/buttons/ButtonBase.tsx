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
 * @property {"bold" | "regular"} [font="regular"] - The font style for the button text.
 * @property {boolean} [widthFull] - The full width style of the button.
 * @property {boolean} [disabled] - The disabled state of the button.
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
  widthFull?: boolean;
  disabled?: boolean;
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
  widthFull = false,
  disabled = false,
  className,
  icon,
  children,
  ...props
}: ButtonProps) => {
  const [isDebouncing, setIsDebouncing] = React.useState<boolean>(false);

  const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
          if (as === "a" && (disabled || isDebouncing)) {
              event.preventDefault();
              return;
          }

        if (isDebouncing || disabled) return;

        setIsDebouncing(true);

        if (props?.onClick) {
          // @ts-ignore
          props?.onClick(event);
        }

        setTimeout(() => {
          setIsDebouncing(false);
        }, 300);
      },
      [props?.onClick, isDebouncing, disabled, as]
  );

  const Element = as;
  const isDisabled = disabled || isDebouncing;
  const ariaProps = as === "a" && isDisabled ? { "aria-disabled": true } : {};

  return (
    <Element
      className={clsx(
        styles.button,
        styles[color],
        styles[size],
        styles[font],
        styles[`style-${styleType}`],
        widthFull && styles['full-w'],
        disabled && styles['disabled'],
        className
      )}
      disabled={as === "button" ? isDisabled : undefined}
      {...ariaProps}
      {...props}
      onClick={handleClick}
    >
      {icon && <span className={styles["button-icon"]}>{icon}</span>}
      {children}
    </Element>
  );
};

export default ButtonBase;
