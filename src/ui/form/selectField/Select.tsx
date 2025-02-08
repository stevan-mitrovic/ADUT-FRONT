/**
 * Composite SelectField component that can render both single and multi-select fields.
 * Supports `Single` and `Multi` as static properties.
 *
 * @component
 * @param {SelectSingleProps} props - Props for the single-select field.
 * @returns {JSX.Element} A single-select field component.
 */
import SelectMultiple, { SelectMultiProps } from "./SelectMultiple";
import SelectSingle, { SelectSingleProps } from "./SelectSingle";

type SelectFieldComponent = React.FC<SelectSingleProps> & {
  /** Single select variant of the SelectField component. */
  Single: React.FC<SelectSingleProps>;
  /** Multi select variant of the SelectField component. */
  Multi: React.FC<SelectMultiProps>;
};

/**
 * Default SelectField component, renders a single-select by default.
 *
 * @param {SelectSingleProps} props - Props for the single-select field.
 * @returns {JSX.Element} A single-select field component.
 */
const SelectField: SelectFieldComponent = (props) => (
  <SelectSingle {...props} />
);

/**
 * Single select component variant.
 *
 * @param {SelectSingleProps} props - Props for the single-select field.
 * @returns {JSX.Element} A single-select field component.
 */
SelectField.Single = (props) => <SelectSingle {...props} />;

/**
 * Multi select component variant.
 *
 * @param {SelectMultiProps} props - Props for the multi-select field.
 * @returns {JSX.Element} A multi-select field component.
 */
SelectField.Multi = (props) => <SelectMultiple {...props} />;

export default SelectField;
