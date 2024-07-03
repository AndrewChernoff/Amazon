import { ResetPasswordForm } from "@/components/resetPassword-form"
import { LoginContainer } from "@/styles/loginStyles"
import { Container, Main } from "@/styles/sharedstyles"

const ResetPassword = () => {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <ResetPasswordForm />
      </LoginContainer>
      </Main>
    </Container>
  )
}

export default ResetPassword
