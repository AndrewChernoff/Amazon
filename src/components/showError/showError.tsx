import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import { useEffect, useState } from "react"

type PropsType = {
    errorStatus: boolean
}

export const ShowError = ({errorStatus}: PropsType) => {
    const [error, setError] = useState(true)


    useEffect(() => {
      setError(errorStatus)
    }, [errorStatus])
    

    const handleClose = () => {
        setError(false);
      };

  return (
    <Snackbar open={error} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="error">
          Some Error. Try again later!
        </Alert>
      </Snackbar>
  )
}
