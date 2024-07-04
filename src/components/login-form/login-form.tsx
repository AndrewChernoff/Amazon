import { FormEvent, useState } from "react";
import { Container, RegisterButton, ResetLink, SignInButton } from "./styled";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks/hooks";
import { signIn } from "@/store/reducers/userReducer";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter()
  const dispatch = useAppDispatch()

  const loginUser = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsloading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(signIn(userCredential.user))
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} - Code is ${errorCode}`);
        setIsloading(false)
      });
  };

  const registerUser = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsloading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Successfully registred!');
        setEmail('')
        setPassword('')
        setIsloading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        setIsloading(false)
      });
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton disabled={isLoading} type="submit" onClick={(e) => loginUser(e)}>
          Sign In
        </SignInButton>
        <p style={{ textAlign: "center" }}>Or</p>
        <RegisterButton disabled={isLoading} type="button" onClick={(e) => registerUser(e)}>
          Create your Amazon Account
        </RegisterButton>
        <br></br>
        <br></br>
    
        <ResetLink href={'reset-password'}>
          Reset password
        </ResetLink>
      </form>
    </Container>
  );
};
