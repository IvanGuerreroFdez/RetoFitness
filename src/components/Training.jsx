import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/Training.css";

function Training() {
  const { register } = useFormContext();

  return (
    <div className={styles.container}>
      <label className="form-label">Objetivo de entrenamiento: </label>
      
      <select {...register("goal")}>
        <option value="muscle">Ganancia de masa muscular</option>
        <option value="weightLoss">Pérdida de peso</option>
        <option value="generalFitness">Fitness general</option>
      </select>
    </div>
  );
};
export default Training;
