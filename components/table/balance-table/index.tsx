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
import { Chip } from '@mui/material'

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
  status: string,
  type: string,
  used: String,
  remind: String,
  start: string,
  end: string,
) => {
  return { no, status, type, used, remind, start, end }
}

const rows = [
  createData(1, 'IN USE', 'PRO', '$52', '$22', '11/01/2023', '12/01/2023'),
  createData(2, 'EXPIRED', 'PRO', '$74', '', '10/01/2023', '11/01/2023'),
  createData(3, 'EXPIRED', 'BASIC', '$11', '', '09/01/2023', '10/01/2023'),
]

const BalanceTable = () => {
  const router = useRouter()
  return (
    <React.Fragment>
      <Typography variant="h3" sx={{ my: 2 }}>
        Subcription
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '90vw' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell align="right">Ammount Used</StyledTableCell>
              <StyledTableCell align="right">Ammount Reminding</StyledTableCell>
              <StyledTableCell align="right">Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.no}
                hover
                onDoubleClick={() => router.push('/payment')}
              >
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell>
                  <Chip
                    label={row.status}
                    color={row.status === 'IN USE' ? 'success' : 'error'}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Chip
                    label={row.type}
                    color={row.type === 'PRO' ? 'success' : 'warning'}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.used}</StyledTableCell>
                <StyledTableCell align="right">{row.remind}</StyledTableCell>
                <StyledTableCell align="right">{row.start}</StyledTableCell>
                <StyledTableCell align="right">{row.end}</StyledTableCell>
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

export default BalanceTable
