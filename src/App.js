import './App.css';
import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import PersonaInfo from './components/PersonaInfo';
import ContactInfo from './components/ContactInfo';
import Training from './components/Training';
import Submit from './components/Submit';

function App() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("Data enviada:", data);
    alert(`Data:\nNombre: ${data.name}\nEdad: ${data.age}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nObjetivo: ${data.goal}`);
    methods.reset();
  };

  return (
    <div className="App">
      <FormProvider {...methods}>
        <h1 style={{ color: "white" }}>Regístrate en Fitness4Life</h1>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <PersonaInfo/>
          <p></p>

          <ContactInfo/>
          <p></p>

          <Training/>
          <p></p>

          <Submit/>
        </form>
      </FormProvider>

    </div>
  );
}

export default App;
