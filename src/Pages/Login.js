import "./Form.css";
export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          ChatBugs <i className="fa-solid fa-bug"></i>
        </span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Log in</button>
        </form>
        <p>Create a new Account? Register</p>
      </div>
    </div>
  );
}
