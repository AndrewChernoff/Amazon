import { FormEvent, useState } from "react";
import { Container, LinkToBack, RegisterButton, SignInButton } from "../login-form/styled";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import Link from "next/link";

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const resetPassword = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(res => alert('Check your email'))
      .catch(res => alert(res))
  }

  return (
    <Container>
      <h1>Reset password</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RegisterButton onClick={resetPassword}>
          Reset password
        </RegisterButton>
    <br></br>
    <br></br>
        <LinkToBack href={'login'}>Back to login page</LinkToBack>
      </form>
    </Container>
  );
};
