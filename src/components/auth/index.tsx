import * as React from 'react'
import { Form as AuthForm } from 'react-final-form'
import { TextField } from 'mui-rff'

const Auth: React.FC = () => {
  const handleSubmit = () => {}

  return (
    <div className="auth">
      <h3>
        Obtén tu <strong>seguro ahora</strong>
      </h3>
      <p>Ingresa los datos para comenzar.</p>
      <AuthForm onSubmit={handleSubmit}>
        {formProps => {
          return (
            <form>
              <TextField
                name="documentNumber"
                placeholder="Nro. de Documento"
                type="number"
              />
            </form>
          )
        }}
      </AuthForm>
    </div>
  )
}

export default Auth
