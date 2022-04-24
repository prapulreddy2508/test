import React from "react";
import { useForm } from "react-hook-form";
import {InputTextfield} from '../src/theme';

function Try() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => console.log(data); 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputTextfield defaultValue="test" {...register("Email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <InputTextfield {...register("Password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Try;
