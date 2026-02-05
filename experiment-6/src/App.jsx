import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";

/* Yup validation schema */
const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <h2>Experiment 6 – Form Handling & Validation | 23BDA70124</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="field">
          <label>Username</label>
          <input type="text" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>

        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        {/* Terms */}
        <div className="field">
          <label>
            <input type="checkbox" {...register("terms")} /> Accept Terms &
            Conditions
          </label>
          <p className="error">{errors.terms?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
