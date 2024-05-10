import { SubmitHandler, UseFormProps } from "@redwoodjs/forms"

interface FormValues {
  name: number
  email: string
  message: string
}

const useContactForm = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  const formConfig: UseFormProps = {
    reValidateMode: 'onSubmit',
  }

  return { onSubmit, formConfig }
}

export default useContactForm
