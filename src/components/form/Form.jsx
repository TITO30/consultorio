import React, { useState } from "react";
import { pacientes } from "../../data/data";
import "./form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const id = pacientes.length + 1;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [paciente, setPaciente] = useState({
    id: "",
    nombre: "",
    edad: "'",
    email: "",
    telefono: "",
    fecha: "",
    sintoma: "",
  });

  const handleChange = (event) => {
    setPaciente({
      ...paciente,
      id: id,
      [event.target.name]: event.target.value,
      [event.target.edad]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.telefono]: event.target.value,
      [event.target.fecha]: event.target.value,
      [event.target.sintoma]: event.target.value,
    });
  };

  const OnSubmit = (e) => {
    pacientes.push(paciente);
    console.log(pacientes);
    alert(
      "Paciente registrado con exito, puede ver su sita en la página de citas"
    );
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(OnSubmit)}>
        <h2 className="title-form">Agenda tu cita ahora</h2>
        <input
        {...register("nombre", { required: true, maxLength: 30 })}
          type="text"
          className="input-form"
          placeholder="Nombre"
          onChange={handleChange}
          name="nombre"
        />
        {errors.email && "Nombre es requerido o ingresa el nombre menor a 30 caracteres"}
        <input
        {...register("edad", { required: true, min: 4, max: 99})}
          type="text"
          className="input-form"
          placeholder="Edad"
          onChange={handleChange}
          name="edad"
        />
        {errors.edad && "Edad es requerida ingresa una edad valida entre 4 y 99 años"}
        <input
        {...register("email", { required: true })}
          type="email"
          className="input-form"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        {errors.email && "Email es requerido"}
        <input
          {...register("telefono", { required: true, maxLength: 10 })}
          type="tel"
          className="input-form"
          placeholder="Teléfono"
          onChange={handleChange}
          name="telefono"
        />
        {errors.telefono && "Telefono es requerido"}
        <input
        {...register("fecha", { required: true })}
          type="date"
          className="input-form"
          placeholder="Fecha"
          onChange={handleChange}
          name="fecha"
        />
        {errors.fecha && "Fecha es requerido"}
        <textarea
        {...register("sintoma", { required: true, maxLength: 300 })}
          className="txta-form"
          placeholder="Sintomas"
          type="text"
          onChange={handleChange}
          name="sintoma"
        />
        {errors.sintoma && "Sintomas son requeridos o escribe menor a 300 caracteres"}
        <div className="btn-cont">
          <button
            type="button"
            onClick={handleSubmit(OnSubmit)}
            className="btn-form"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
