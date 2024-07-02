import { LoginForm } from "@/components/login-form/login-form"
import { LoginContainer } from "@/styles/loginStyles"
import { Container, Main } from "@/styles/sharedstyles"

const Login = () => {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  )
}

export default Login
