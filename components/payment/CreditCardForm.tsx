import { Stack, TextField } from '@mui/material'
import React from 'react'
import CountrySelect from '../country-select'

function CreditCardForm() {
  return (
    <Stack spacing={2}>
      <TextField label="Card number" size="small" />
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
      <Stack direction="row" spacing={1.5}>
        <TextField
          label="Postal code"
          size="small"
          sx={{
            width: '30%',
          }}
        />
        <CountrySelect
          size="small"
          sx={{
            width: '70%',
          }}
        />
      </Stack>
    </Stack>
  )
}

export default CreditCardForm
