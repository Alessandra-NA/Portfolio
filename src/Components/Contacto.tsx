import React from 'react'

interface FormData{
  name: string
  email: string
  message: string
}

function Contacto() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(formData);
    setSubmitted(true);
  }
  const sendEmail = (formData: FormData) => {
    
  }

  return (
    <div>Contacto</div>
  )
}

export default Contacto