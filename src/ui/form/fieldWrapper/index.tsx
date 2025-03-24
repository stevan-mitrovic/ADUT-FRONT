import styles from "./index.module.scss";
import clsx from "clsx";

interface FieldWrapperProps {
  /** Name of the field (must match form schema) */
  name: string;
  /** Label for the field */
  label: string;
  /** Alignment for the label and error message*/
  textAlign: "left" | "center";
  /** The field component (InputField, SelectField, etc.) */
  children: React.ReactElement;
  /** Error message for validation feedback */
  error?: string;
}

/**
 * A wrapper component for form fields that adds a label and error message.
 * This component ensures a consistent UI structure across different field types.
 *
 * @component
 * @example
 * ```tsx
 * <FieldWrapper name="email" label="Email" error="Invalid email">
 *   <InputField type="email" placeholder="Enter your email" />
 * </FieldWrapper>
 * ```
 * @param {FieldWrapperProps} props - Props for the field wrapper.
 * @param {string} props.name - The name of the field, must match the form schema.
 * @param {string} props.label - The label text displayed above the field.
 * @param {React.ReactElement} props.children - The field component (e.g., InputField or SelectField).
 * @param {string} [props.error] - Optional error message displayed below the field.
 * @returns {JSX.Element} A form field with a label and validation message.
 */
const FieldWrapper: React.FC<FieldWrapperProps> = ({
  name,
  label,
  textAlign = "left",
  children,
  error,
}) => {
  return (
    <div className={clsx(styles.fieldWrapper, styles[textAlign])}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {children}
      <span className={styles.error}>{error ? error : ""}</span>
    </div>
  );
};

export default FieldWrapper;
