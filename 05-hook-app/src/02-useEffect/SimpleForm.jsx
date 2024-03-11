import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "Julio Cesar",
    email: "j@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    //console.log('use')

  }, [])

  useEffect(() => {
   // console.log('form state change')

  }, [formState])

  useEffect(() => {
    //console.log('email change')

  }, [email])
  return (
    <>
      <h1>Formulario simple </h1>
      <hr />

      <input
        value={username}
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
      />

      <input

        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {(username === 'Julio Cesar 1') && <Message/>}
      
    </>
  );
};
