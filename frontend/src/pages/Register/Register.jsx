import React, { useState } from "react";
import { Commonbutton, CustomInput } from "../../components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../components/global.css";
import axios from 'axios';

export const Register = () => {
  const [Input, setInput] = useState("");
  const [Password, setPassword] = useState("");
  const [Checked, setChecked] = useState(false);

  const HandleInput = (event) => {
    setInput(event.target.value);
  };

  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };

  const Showpassword = () => {
    setChecked(!Checked);
  };

  const HandleForm = (event) => {
    event.preventDefault();
    console.log("Data being sent from client:", {
      name: Input,
      password: Password,
    });
    axios
      .post(`http://localhost:10000/register`, {
        name: Input,
        password: Password,
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        <form onSubmit={HandleForm}>
          <div className="mb-3">
            <CustomInput
              _type="text"
              _placeholder="Username"
              _function={HandleInput}
              _class="form-control"
            />
          </div>
          <div className="mb-3">
            <CustomInput
              _type={Checked ? "text" : "password"}
              _placeholder="Password"
              _function={HandlePassword}
              _class="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <CustomInput
              _type="checkbox"
              _function={Showpassword}
              _class="form-check-input"
            />
            <label className="form-check-label">Show Password</label>
          </div>
          <p className="mt-3 custom-small myfont">
            Alredy have account? <Link to="/loginform">Login</Link>
          </p>
          <Commonbutton
            _function={HandleForm}
            _content="Register"
            _class="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};
