import React, { useState } from "react";
import { Commonbutton, CustomInput } from "../../components/index";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  const [Input, setInput] = useState("");
  const [Password, setPassword] = useState("");
  const [Checked, setChecked] = useState(false);

  const HandleInput = (event) => {
    setInput(event.target.value);
  };

  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };

  const Check = () => {
    setChecked(!Checked);
  };

  const HandleForm = () => {
    console.log(Input, Password);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        <form>
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
              _type="password"
              _placeholder="Password"
              _function={HandlePassword}
              _class="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <CustomInput _type="checkbox" _function={Check} _class="form-check-input" />
            <label className="form-check-label">Show Password</label>
          </div>
          <Commonbutton
            _function={HandleForm}
            _content="Login"
            _class="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};