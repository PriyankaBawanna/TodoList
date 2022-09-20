import React, { useState } from "react";

const InputForm = () => {
  const [inputDataOfUser, setInputDataOfUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const updateName = (e) => {
    setInputDataOfUser({ ...inputDataOfUser, name: e.target.value });
  };
  const updateEmail = (e) => {
    setInputDataOfUser({ ...inputDataOfUser, email: e.target.value });
  };

  const password = (e) => {
    setInputDataOfUser({
      ...inputDataOfUser,
      password: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="inputStudentLabel">Name</label>
          <input
            name={"name"}
            value={inputDataOfUser.name}
            type={"text"}
            placeholder="Name"
            onChange={updateName}
          />
        </div>
        <label className="inputStudentLabel">Email</label>
        <input
          name={"email"}
          value={inputDataOfUser.email}
          type={"text"}
          placeholder="email"
          onChange={updateEmail}
        />
        <div>
          <label className="inputStudentLabel">Password</label>
          <input
            name={"term"}
            value={inputDataOfUser.password}
            type={"text"}
            placeholder="password"
            onChange={password}
          />
        </div>
      </form>
    </>
  );
};
export default InputForm;
