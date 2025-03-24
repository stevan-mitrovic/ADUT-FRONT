import React, { FC, CSSProperties } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Variant, TextAlign, FontWeight, As } from "./types";

interface TypographyProps {
  /**
   * The variant determines the HTML element to render (in case as is not passed) and styling to apply.
   *
   * Supported values:
   * - `"h1"`
   * - `"h2"`
   * - `"h3"`
   * - `"h4"`
   * - `"h5"`
   * - `"h6"`
   * - `"p"`
   * - `"p2"`
   * - `"p3"`
   * - `"span"`
   * - `"span2"`
   */
  variant: Variant;

  /**
   * The as determines the HTML element to render and keep the styling from variant.
   *
   * Supported values:
   * - `"h1"`
   * - `"h2"`
   * - `"h3"`
   * - `"h4"`
   * - `"h5"`
   * - `"h6"`
   * - `"p"`
   * - `"span"`
   */
  as?: As;

  /**
   * The content to be rendered inside the typography element.
   */
  children: React.ReactNode;

  /**
   * Additional class names for customization.
   */
  className?: string;

  /**
   * Text color, accepts any valid CSS color value.
   */
  color?: string;

  /**
   * Text alignment, restricted to predefined values for consistency.
   */
  textAlign?: TextAlign;

  /**
   * Font weight, restricted to predefined values for consistency.
   */
  fontWeight?: FontWeight;

  /**
   * Font size, accepts any valid value.
   */
  fontSize?: string;
}

/**
 * A reusable Typography component for rendering various text styles with additional customization.
 *
 * @param {TypographyProps} props - The properties passed to the component.
 * @returns {JSX.Element} A styled typography element.
 * @example
 *  // Returns h1 "Title" element with default styling of h4 and additional styling controls
 * <Typography
          variant="h4"
          as="h1"
          className={styles.title}
          textAlign="center"
          fontWeight={"700"}
        >
          Title
        </Typography>
 */

const Typography: FC<TypographyProps> = ({
  variant,
  as,
  children,
  className,
  color,
  textAlign,
  fontWeight,
  fontSize,
}) => {
  const Component =
    as || variant?.startsWith("p")
      ? "p"
      : variant?.startsWith("span")
      ? "span"
      : (variant as As);

  const customStyle: CSSProperties = {
    color,
    textAlign,
    fontWeight,
    fontSize,
  };

  return (
    <Component
      className={clsx(styles.typography, styles[variant], className)}
      style={customStyle}
    >
      {children}
    </Component>
  );
};

export default Typography;
