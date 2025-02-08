import { Controller } from "react-hook-form";
import styles from "./index.module.scss";
import FieldWrapper from "../fieldWrapper";
import clsx from "clsx";

interface InputFieldProps {
  /** Name of the input field (must match the form schema) */
  name: string;
  /** React Hook Form control object */
  control: any;
  /** Label for the input field */
  label: string;
  /** Alignment for the label, field value and error message*/
  textAlign?: "left" | "center";
  /** Input type (default is "text") */
  type?: string;
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Indicator for disabled field */
  disabled?: boolean;
}

/**
 * Reusable Input Field component integrated with react-hook-form's Controller.
 * @param {InputFieldProps} props - Input field properties.
 * @returns {JSX.Element} A controlled input field component.
 */
const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  textAlign = "left",
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FieldWrapper
            name={name}
            label={label}
            textAlign={textAlign}
            error={error?.message || ""}
          >
            <div className={styles.inputWrapper}>
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={clsx(error && styles.error, styles[textAlign])}
              />
            </div>
          </FieldWrapper>
        </>
      )}
    />
  );
};

export default InputField;
