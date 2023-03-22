"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Form(): JSX.Element {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const hanfleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: data1,
      password: data2,
    };
    axios.post("https://sheetdb.io/api/v1/a93dz4cl7jww1", data).then((res) => {
      console.log(res, "res");
    });
  };

  return (
    <div>
      <form onSubmit={hanfleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setData1(e.target.value);
            }}
            value={data1}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            onChange={(e) => {
              setData2(e.target.value);
            }}
            value={data2}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
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
