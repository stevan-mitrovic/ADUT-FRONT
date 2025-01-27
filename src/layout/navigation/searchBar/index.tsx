// components/Navigation.tsx

import React from "react";
import styles from "./index.module.scss";
import InputSearch from "../../../ui/form/inputSearch";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <InputSearch minHeight={42} />
    </div>
  );
};

export default SearchBar;
