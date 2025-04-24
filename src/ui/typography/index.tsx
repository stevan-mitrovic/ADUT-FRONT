import React, { FC, CSSProperties } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Variant, TextAlign, FontWeight, As } from "./types";

interface TypographyProps {
  /**
   * The variant determines the default styling and HTML element (if 'as' prop is not specified).
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
   * Overrides the HTML element to render while maintaining styling from the variant.
   *
   *  For example, use this to semantically render an `h1` while keeping the visual styling of `h3`.
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
   *
   * Can be text, other components, or any valid React node.
   */
  children: React.ReactNode;

  /**
   * Additional class names for customization beyond base styling.
   *
   * Use this to apply custom styles from your own CSS modules or utility classes.
   */
  className?: string;

  /**
   * Text color, accepts any valid CSS color value.
   *
   * Examples: HEX (#FF0000), RGB (rgb(255, 0, 0)), named colors (red)
   */
  color?: string;

  /**
   * Text alignment, restricted to predefined values for consistency.
   *
   * Possible values: 'left', 'center', 'right', 'justify'
   */
  textAlign?: TextAlign;

  /**
   * Font weight, restricted to predefined values for consistency.
   *
   * Possible values: 'inherit', '400' (regular), '500' (medium), '600' (semibold), '700' (bold)
   */
  fontWeight?: FontWeight;

  /**
   * Font size override, accepts any valid CSS font-size value.
   */
  fontSize?: string;
}

/**
 * Typography is a flexible component for consistent text styling across the application.
 *
 * This component provides a centralized way to manage text appearance while maintaining semantic HTML structure.
 * It combines predefined styling variants with the ability to override specific properties and the rendered HTML element.
 *
 * @component
 * @example
 * // Basic usage with a heading variant
 * <Typography variant="h1">Page Title</Typography>
 *
 * @example
 * // Using different semantic element while keeping styling
 * <Typography variant="h4" as="h2">Section Heading</Typography>
 *
 * @example
 * // With additional styling customizations
 * <Typography
 *   variant="p"
 *   color="#334155"
 *   textAlign="center"
 *   fontWeight="600"
 *   className="custom-paragraph"
 * >
 *   This is styled paragraph text.
 * </Typography>
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
    as || (variant?.startsWith("p")
      ? "p"
      : variant?.startsWith("span")
      ? "span"
      : (variant as As));

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
