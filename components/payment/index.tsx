import React from 'react'
import {
  Container,
  Grid,
  Stack,
  Divider,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import Methods from './Methods'

function PaymentContainer() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700}>
            Start your payment today
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <TextField label="First Name" defaultValue="John" size="small" />
              <TextField label="Last Name" defaultValue="Doe" size="small" />
              <TextField
                label="Email"
                defaultValue="johndoe@gmail.com"
                size="small"
              />
            </Stack>
            <Divider />
            <Methods />
            <Button variant="outlined" color="primary">
              Payment Now
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            sx={{
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1.5,
              p: 1.5,
            }}
            spacing={2}
          >
            <Typography variant="h6">Shopping Cart</Typography>
            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Subtotal</Typography>
                <Typography>$38.00</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Shipping Fee</Typography>
                <Typography>Free</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Tax</Typography>
                <Typography>$4.00</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" fontWeight={700}>
                  Order Total
                </Typography>
                <Typography fontWeight={700}>$42.00</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PaymentContainer
