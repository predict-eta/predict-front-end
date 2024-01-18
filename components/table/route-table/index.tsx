// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow, { TableRowProps } from '@mui/material/TableRow'
import TableCell, {
  TableCellProps,
  tableCellClasses,
} from '@mui/material/TableCell'
import React from 'react'
import { useRouter } from 'next/router'

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0,
  },
}))

const createData = (
  no: number,
  arrivalDate: string,
  startDate: string,
  route: String,
  quantity: number,
  unit: string,
) => {
  return { no, arrivalDate, startDate, route, quantity, unit }
}

const rows = [
  createData(1, '12/08/2023', '11/08/2023', 'VN - Canada + US', 1000, 'KG'),
  createData(
    2,
    '12/08/2023',
    '11/08/2023',
    'North Asia (China/Hongkong/Taiwan + South Korea + Japan) - Canada + US',
    30,
    'KG',
  ),
  createData(
    3,
    '12/08/2023',
    '11/08/2023',
    'Oceania (Australia + New Zealand) - Canada + US',
    60,
    'KG',
  ),
  createData(
    4,
    '12/08/2023',
    '11/08/2023',
    'North Africa (Morocco/Algeria/Libya/Egypt) - Canada + US',
    40,
    'KG',
  ),
]

const RouteTable = () => {
  const router = useRouter()
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ my: 2 }}>
          Saved Routes
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '90vw' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Start Date</StyledTableCell>
              <StyledTableCell align="right">Arrival Date</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>
              <StyledTableCell>Route</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="right">{row.startDate}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.arrivalDate}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.unit}</StyledTableCell>
                <StyledTableCell>{row.route}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component={Paper}
        count={rows.length}
        rowsPerPage={10}
        page={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </React.Fragment>
  )
}

export default RouteTable
