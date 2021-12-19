import { useState } from "react/cjs/react.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./FooterItems.css";

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signUpText, setSignUpText] = useState("Success");
  const [signUpSuccess, setSignUpSuccess] = useState(true);

  const signUpHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, passwordConfirm);
  };

  return (
    <>
      <div className="create__account__container">
        <h1>CREATE AN ACCOUNT</h1>
      </div>
      <form className="create__account__form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <div className="sign__up__modal">
          <FontAwesomeIcon icon={faCheckCircle} />
          <p>{signUpText}</p>
        </div>
        <button onClick={signUpHandler}>Sign Up</button>
      </form>
    </>
  );
};

export default CreateAccount;
