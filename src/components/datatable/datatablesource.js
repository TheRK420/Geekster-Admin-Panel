export const userColumns = [
    {field:"id",headerName:"ID",width:20},
    {field:"username",headerName:"Full Name",width:200,},
    {field:"mail",headerName:"Email",width:300},
    {field:"age",headerName:"Age",width:70},
    {field:"amount",headerName:"Amount Paid",width:100},
    {field:"method",headerName:"Payment Method",width:200},
    {field:"status",headerName:"Status",width:100,renderCell: (params) => {
        return <div className={`cellwithStatus ${params.row.status}`}>{params.row.status}</div>
    }},
];
export const userRows = [
  {
    id: 1,
    username: "Sourasish Sengupta",
    age: 22,
    mail: "rikrrr4345@gmail.com",
    amount: 70000,
    method: "Cash",
    status: "Approved",
  },
  {
    id: 2,
    username: "Abesh Sarkar",
    age: 23,
    mail: "abesh2@gmail.com",
    amount: 20000,
    method: "Easy Monthly Installment(ICICI)",
    status: "Pending",
  },
  {
    id: 3,
    username: "Shivam Bansal",
    age: 28,
    mail: "shivam3@gmail.com",
    amount: 80000,
    method: "Cheque",
    status: "Approved",
  },
  {
    id: 4,
    username: "Pranshu Verma",
    age: 30,
    mail: "pranshu4@gmail.com",
    amount: 50000,
    method: "Bank Transfer",
    status: "Approved",
  },
  {
    id: 5,
    username: "Ankit Singh",
    age: 24,
    mail: "ankit5@gmail.com",
    amount: 40000,
    method: "Cash",
    status: "Pending",
  },
];
