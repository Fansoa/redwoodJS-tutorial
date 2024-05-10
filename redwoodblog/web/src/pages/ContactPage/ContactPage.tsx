import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import {
  FieldError,
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  Submit
} from '@redwoodjs/forms'
import useContactForm from './hooks/useContactForm'

const ContactPage = () => {
  const { onSubmit, formConfig, loading, error } = useContactForm()

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Toaster/>
      <Form onSubmit={onSubmit} config={formConfig} error={error}>
        <FormError error={error} wrapperClassName="form-error" />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error"  />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
