import { SubmitHandler, UseFormProps } from "@redwoodjs/forms"
import { toast } from '@redwoodjs/web/toast'

import { useMutation } from "@redwoodjs/web"
import CREATE_CONTACT from "./query/CREATE_CONTACT"
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

interface FormValues {
  name: number
  email: string
  message: string
}

const useContactForm = () => {
  const [create, {loading, error}] = useMutation<
  CreateContactMutation,
  CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => toast.success('Thank you for your submission!'),
    onError: ({message}) => toast.error(message)
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  const formConfig: UseFormProps = {
    reValidateMode: 'onSubmit',
  }

  return { onSubmit, formConfig, loading, error }
}

export default useContactForm
