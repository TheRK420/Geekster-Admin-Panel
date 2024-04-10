import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const list = () => {
    const rows = [
       {
        id: 1145155,
        product: "Full Stack Web Development",
        customer: "Sourasish Sengupta",
        date: "1st June",
        amount: 70000,
        method: "Cash",
        status: "Approved",
       },
       {
        id: 2224587,
        product: "Data Science and Analytics",
        customer: "Abesh Sarkar",
        date: "1st May",
        amount: 20000,
        method: "Easy Monthly Installment(ICICI)",
        status: "Pending",
       },
       {
        id: 1154287,
        product: "Full Stack Web Development",
        customer: "Shivam Bansal",
        date: "15th May",
        amount: 80000,
        method: "Cheque",
        status: "Approved",
       },
       {
        id: 1145189,
        product: "Data Science and Analytics",
        customer: "Pranshu Verma",
        date: "22nd June",
        amount: 50000,
        method: "Bank Transfer",
        status: "Approved",
       },
       {
        id: 1925155,
        product: "Full Stack Web Development",
        customer: "Ankit Singh",
        date: "30th March",
        amount: 40000,
        method: "Cash",
        status: "Pending",
       },
      ];
  return (
  <TableContainer component={Paper} className='table'>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className='tableCell'>Registration Number</TableCell>
        <TableCell className='tableCell'>Student Name</TableCell>
        <TableCell className='tableCell'>Course</TableCell>
        <TableCell className='tableCell'>DOJ</TableCell>
        <TableCell className='tableCell'>Amount Paid (₹)</TableCell>
        <TableCell className='tableCell'>Payment Method</TableCell>
        <TableCell className='tableCell'>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell className='tableCell'>{row.id}</TableCell>
          <TableCell className='tableCell'>{row.customer}</TableCell>
          <TableCell className='tableCell'>{row.product}</TableCell>
          <TableCell className='tableCell'>{row.date}</TableCell>
          <TableCell className='tableCell'>{row.amount}</TableCell>
          <TableCell className='tableCell'>{row.method}</TableCell>
          <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  )
}

export default list
