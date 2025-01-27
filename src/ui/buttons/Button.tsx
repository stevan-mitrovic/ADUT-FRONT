import ButtonBase, { ButtonProps } from "./ButtonBase";

/**
 * Button Component
 * A wrapper for the ButtonBase component with predefined variants for common use cases.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Button component.
 */
const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonBase {...props}>{children}</ButtonBase>
);


/**
 * Primary Button variant with "green" color by default.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Primary Button.
 */
Button.Primary = (props: ButtonProps) => (
  <ButtonBase {...props} color="green" />
);

/**
 * Secondary Button variant with "gray" color by default.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Secondary Button.
 */

Button.Secondary = (props: ButtonProps) => (
  <ButtonBase {...props} color="gray" />
);

/**
 * White Button variant with "white" color by default.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered White Button.
 */
Button.White = (props: ButtonProps) => <ButtonBase {...props} color="white" />;

/**
 * Black Button variant with "black" color by default.
 *
 * @param {ButtonProps} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Black Button.
 */
Button.Black = (props: ButtonProps) => <ButtonBase {...props} color="black" />;

/**
 * Icon Button variant requiring an icon as a prop.
 *
 * @param {ButtonProps & { icon: React.ReactNode }} props - The properties object for the Button component.
 * @returns {JSX.Element} - The rendered Icon Button.
 * @throws Will throw an error if the `icon` prop is not provided.
 */
Button.Icon = ({ icon, ...props }: ButtonProps) => (
  <ButtonBase {...props} icon={icon} styleType={"icon"} />
);

export default Button;
