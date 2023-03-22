import React, { ChangeEvent, useState } from "react";
import axios from "axios";

interface IFormData {
  email: string;
  password: string;
}

function Form(): JSX.Element {
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IFormData = {
      email: formData.email,
      password: formData.password,
    };
    axios.post("https://sheetdb.io/api/v1/a93dz4cl7jww1", data).then((res) => {
      console.log(res, "res");
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
          <div id="emailHelp" className="form-text">
            Well never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
