import { Modal } from '@mui/material'
import React from 'react'
import LoginForm from './LoginForm'

const Login = ({ modal, ...props }) => {
  if (!modal) return <LoginForm {...props} />
  const [open, handleModal] = modal
  return (
    <Modal open={open} onClose={handleModal}>
      <LoginForm {...props} />
    </Modal>
  )
}

export default Login
