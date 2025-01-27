import React from "react";
import styles from "./index.module.scss";
import SearchIcon from "../../icons/search";

/**
 * InputSearch Component
 * A reusable search input component with an adjustable minimum height and placeholder text.
 *
 * @module InputSearch
 */

/**
 * Props for the InputSearch component.
 *
 * @typedef {Object} Props
 * @property {number} [minHeight=32] - The minimum height of the input field and container, in pixels.
 * @property {string} [placeholder="Pretraga"] - The placeholder text displayed in the input field.
 */
type Props = {
  minHeight?: number;
  placeholder?: string;
};

/**
 * InputSearch Component
 * A search input with a customizable minimum height and placeholder.
 * Includes a button with a search icon for submitting the search query.
 *
 * @param {Props} props - The properties object for the InputSearch component.
 * @returns {JSX.Element} - The rendered InputSearch component.
 */
const InputSearch: React.FC<Props> = ({
  minHeight = 32,
  placeholder = "Pretraga",
}: Props) => {
  return (
    <div className={styles.container} style={{ minHeight: minHeight }}>
      <input
        type="text"
        placeholder={placeholder}
        style={{ minHeight: minHeight }}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};

export default InputSearch;
