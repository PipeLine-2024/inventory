import React, { useState } from "react";
import { Commonbutton, CustomInput } from "../../components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../components/global.css";

export const Login = () => {
  const [Input, setInput] = useState("");
  const [Password, setPassword] = useState("");
  const [forgetemail  , setforgetemail] = useState("");
  const [Checked, setChecked] = useState(false);
  const [forgetpassword, setforgetpassword] = useState(false);

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

    axios
      .post(`http://localhost:10000/Login`, { Input, password: Password })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const ForgetPassword = () => {
    setforgetpassword(!forgetpassword);
  }

  const passSender = (event) => {
    event.preventDefault();
    console.log(forgetemail);

    axios
      .post(`http://localhost:10000/sendpassword/${forgetemail}`, {})
      .then((outcome) => console.log(outcome))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        <form >
          {forgetpassword ? (
            <>
              <h1 className="text-primary text-capitalize heading mb-3">forget password</h1>
              <CustomInput
                _type="email"
                _placeholder="email.."
                _function={(e) => {
                  setforgetemail(e.target.value);
                }}
                _class="form-control mb-3"
              />
              <Commonbutton
                _function={passSender}
                _content="send"
                _class="btn btn-primary "
              />
            </>
          ) : (
            <>
              <div className="mb-3">
                <CustomInput
                  _type="text"
                  _placeholder="Username"
                  _function={HandleInput}
                  _class="form-control text-capitalize"
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
              <div className="mb-3 form-check d-flex justify-content-between align-items-center">
                <div>
                  <CustomInput
                    _type="checkbox"
                    _function={Showpassword}
                    _class="form-check-input"
                  />
                  <label className="form-check-label myfont">
                    Show Password
                  </label>
                </div>
                <label
                  className="form-check-label myfont cursor"
                  onClick={ForgetPassword}
                >
                  Forget Password?
                </label>
              </div>
              <p className="mt-3 myfont">
                don't have an account? <Link to="/">register</Link>
              </p>
              <Commonbutton
                _function={HandleForm}
                _content="Login"
                _class="btn btn-primary"
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
};  