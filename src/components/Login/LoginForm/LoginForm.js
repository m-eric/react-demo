import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";

import actions from "../../../store/actions";

const LoginForm = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = formData => {
    setSubmitError(false);
    setSubmitting(true);
    axios
      .post("/auth/login", formData)
      .then(res => {
        onSubmitSuccess(res);
      })
      .catch(() => {
        onSubmitError();
      });
  };

  const onSubmitSuccess = res => {
    setSubmitting(false);
    const {
      user,
      access_token: token,
      expires_in: expire,
      remember
    } = res.data;
    const tokenExpire = new Date().getTime() + expire * 1000;
    dispatch(actions.auth.login(user, token, tokenExpire, remember))
  };

  const onSubmitError = () => {
    setSubmitting(false);
    setSubmitError(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email адреса</label>
        <input
          name="email"
          type="email"
          className={`form-control ${
            errors.email && formState.touched.email && "is-invalid"
          }`}
          autoFocus
          ref={register({ required: true })}
          onInput={() => {
            setSubmitError(false);
          }}
        />
      </div>

      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">Лозинка</label>
        <input
          name="password"
          type="password"
          className={`form-control ${
            errors.password && formState.touched.password && "is-invalid"
          }`}
          ref={register({ required: true })}
          onInput={() => {
            setSubmitError(false);
          }}
        />
      </div>

      {/* Remember */}
      <div className="form-check form-check-inline mt-2 cursor-pointer">
        <input
          name="remember"
          id="remember-me"
          type="checkbox"
          className="form-check-input cursor-pointer"
          ref={register}
        />
        <label
          className="form-check-label ml-1 cursor-pointer"
          htmlFor="remember-me"
        >
          Запамти ме
        </label>
      </div>

      {/* Error message */}
      {submitError && (
        <div className="text-red-500 text-center text-xl font-bold mt-8 mb-3">
          Погрешан email или лозинка
        </div>
      )}

      {/* Submit */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="btn btn-primary px-4"
          disabled={submitting}
        >
          {!submitting && <span>Login</span>}
          {submitting && <i className="fas fa-cog fa-spin px-3"></i>}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
