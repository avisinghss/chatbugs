import "./Form.css";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          ChatBugs <i className="fa-solid fa-bug"></i>
        </span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <label htmlFor="file">
            <i class="fa-solid fa-file-circle-plus"></i>
            <small>Add a avatar</small>
          </label>
          <input style={{ display: "none" }} id="file" type="file" />
          <button>Sign up</button>
        </form>
        <p>Already Have an Account? Login</p>
      </div>
    </div>
  );
}
