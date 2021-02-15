import * as React from 'react'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import { Radios } from 'mui-rff'
import { Button, FormControl } from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import { constants, storage } from 'utils'
import AddRelative from './add-relative'
import NewPersonal from './new-personal'
import OldPersonal from './old-personal'
import {
  HealthCareValues,
  PEOPLE,
  Props,
  RelativeKind,
  validate,
} from './utils'

const Step2: React.FC<Props> = ({ insured }) => {
  const history = useHistory()

  const handleSubmit = (values: HealthCareValues) => {
    insured.family = values.relatives

    const keyName = `${insured.id.name}-${insured.id.value}`

    storage.set(keyName, insured)

    storage.set('current', insured)

    history.push(constants.Routes.PLANS)
  }

  const initialValues = { people: null as unknown, relatives: insured.family }

  if (insured.hasHealthCare) {
    initialValues.people =
      insured.family.length === 0 ? RelativeKind.ME : RelativeKind.FAMILY
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      {formProps => {
        return (
          <form onSubmit={formProps.handleSubmit}>
            {insured.hasHealthCare ? (
              <OldPersonal insured={insured} />
            ) : (
              <NewPersonal insured={insured} />
            )}
            <FormControl className="mb-2">
              <Radios
                className="mui-radios"
                label="¿A quién vamos a asegurar?"
                name="people"
                required={true}
                data={PEOPLE}
              />
            </FormControl>
            <AddRelative insured={insured} />
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
