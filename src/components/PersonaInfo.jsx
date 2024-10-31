import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/Personal.css";

function PersonaInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={styles.container}>
      <label className="form-label">Nombre:</label>
      <input {...register("name", { required: "Nombre requerido" })} />
      {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      <p></p>
      
      <label className="form-label">Edad: </label>
      <input type="number" {...register("age", { required: "Edad requerida" })} />
      {errors.age && <span className={styles.error}>{errors.age.message}</span>}
    </div>
  );
};
export default PersonaInfo;
