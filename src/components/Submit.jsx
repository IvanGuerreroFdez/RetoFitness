import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/Submit.module.css";

function Submit() {
  const { formState } = useFormContext();

  return (
    <button className={styles.submit} type="submit" disabled={!formState.isValid}>¡¡¡Darse de alta!!!</button>
  );
};
export default Submit;
