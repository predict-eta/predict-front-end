import React from 'react'
import { Stack, TextField } from '@mui/material'

function PaypalForm() {
  return (
    <>
      <Stack spacing={2}>
        <TextField
          label="Card number"
          defaultValue="123 123 123"
          size="small"
        />
        <Stack direction="row" spacing={1.5}>
          <TextField
            label="Expiration date (MM/YYYY)"
            size="small"
            sx={{
              width: '70%',
            }}
          />
          <TextField
            label="CVC/CVV"
            size="small"
            sx={{
              width: '30%',
            }}
          />
        </Stack>
      </Stack>
    </>
  )
}

export default PaypalForm
