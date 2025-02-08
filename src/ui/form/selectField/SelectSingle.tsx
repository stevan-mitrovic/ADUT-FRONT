import { Controller } from "react-hook-form";
import clsx from "clsx";
import styles from "./index.module.scss";
import Select from "react-select";
import FieldWrapper from "../fieldWrapper";

interface Option {
  /** Option value */
  value: string;
  /** Option display label */
  label: string;
}

export interface SelectSingleProps {
  /** Name of the select field (must match the form schema) */
  name: string;
  /** React Hook Form control object */
  control: any;
  /** Label for the select dropdown */
  label: string;
  /** Alignment for the label, field value and error message*/
  textAlign?: "left" | "center";
  /** Array of selectable options */
  options: Option[];
  /** Placeholder text for the input field */
  placeholder?: string;
  /** Indicator for disabled field */
  disabled?: boolean;
  /** Indicator appears for user to clear the field */
  clearable?: boolean;
}

/**
 * Reusable Select Single component integrated with react-hook-form's Controller.
 * @param {SelectFieldProps} props - Select field properties.
 * @returns {JSX.Element} A controlled select field component.
 */
const SelectSingle: React.FC<SelectSingleProps> = ({
  name,
  control,
  label,
  options,
  textAlign = "left",
  placeholder,
  disabled = false,
  clearable = true,
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
            <div className={styles.selectWrapper}>
              <Select
                {...field}
                options={options}
                closeMenuOnSelect={true}
                hideSelectedOptions={true}
                isClearable={clearable}
                isDisabled={disabled}
                isLoading={false}
                isMulti={false}
                maxMenuHeight={300}
                noOptionsMessage={() => "Nema podataka"}
                placeholder={placeholder}
                classNames={{
                  control: (state) =>
                    error?.message
                      ? clsx(styles.control, styles["control-error"])
                      : state.isFocused
                      ? clsx(styles.control, styles["control-focused"])
                      : state?.isDisabled
                      ? clsx(styles.control, styles["control-disabled"])
                      : styles.control,
                  placeholder: () => styles.placeholder,
                  valueContainer: () => styles.value,
                  singleValue: () => styles.value,
                  menu: () => styles.menu,
                  option: (state) =>
                    state.isFocused
                      ? clsx(styles.option, styles["option-focused"])
                      : state.isSelected
                      ? clsx(styles.option, styles["option-selected"])
                      : styles.option,
                }}
              />
            </div>
          </FieldWrapper>
        </>
      )}
    />
  );
};

export default SelectSingle;
