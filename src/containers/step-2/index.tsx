import * as React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { Radios } from 'mui-rff'
import { Button, FormControl } from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import { useInsured } from 'hooks'
import { constants, storage, validate } from 'utils'
import AddRelative from './add-relative'
import NewPersonal from './new-personal'
import OldPersonal from './old-personal'
import { getFields, HealthCareValues, initialValues, people } from './utils'

const Step2: React.FC = () => {
  const history = useHistory()

  const insured = useInsured()

  const handleSubmit = (values: HealthCareValues) => {
    insured.family = values.relatives

    const keyName = `${insured.id.name}-${insured.id.value}|${insured.login.uuid}`

    storage.set(keyName, insured)

    history.push(constants.Routes.PLANS)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fields = React.useMemo(() => getFields(insured.hasHealthCare), [])

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate(fields)}
    >
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            {insured.hasHealthCare ? <OldPersonal /> : <NewPersonal />}
            <FormControl className="mb-2">
              <Radios
                className="mui-radios"
                label="¿A quién vamos a asegurar?"
                name="people"
                required={true}
                data={people}
              />
            </FormControl>
            <AddRelative />
            <FormControl className="mt-3">
              <Button
                variant="contained"
                color="primary"
                className="mui-submit"
                type="submit"
                disabled={formProps.invalid || formProps.submitting}
                endIcon={<ArrowIcon />}
              >
                Continuar
              </Button>
            </FormControl>
          </form>
        )
      }}
    </Form>
  )
}

export default Step2
