import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/Contact.css";

function ContactInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={styles.container}>
      <label className="form-label">Email:</label>
      <input type="email" {
        ...register("email", { required: "Email requerido" })
        } />

      {errors.email && <span className={styles.error}>{errors.email.message}</span>}

      <p></p>
      
      <label className="form-label">Teléfono:</label>
      <input type="tel" {
        ...register("phone", { required: "Teléfono requerido" })
        } />
        
      {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
    </div>
  );
};
export default ContactInfo;
