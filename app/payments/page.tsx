import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const getData=async():Promise<Payment []>=>{
return[
    {
        id:"728ed521",
        amount:123,
        status:"pending",
        username:"shreya",
        email:"shreya87@gmail.com",
    },
    {
    id: "728ed521",
    amount:123,
    status: "pending",
    username: "shreya",
    email: "shreya87@gmail.com",
  },
  {
    id: "728ed522",
    amount: 450,
    status: "completed",
    username: "rahul",
    email: "rahul.kumar@gmail.com",
  },
  {
    id: "728ed523",
    amount: 320,
    status: "failed",
    username: "ananya",
    email: "ananya.singh@yahoo.com",
  },
  {
    id: "728ed524",
    amount: 980,
    status: "completed",
    username: "arjun",
    email: "arjun.mehra@outlook.com",
  },
  {
    id: "728ed525",
    amount: 150,
    status: "pending",
    username: "divya",
    email: "divya.nair@gmail.com",
  },
  {
    id: "728ed526",
    amount: 760,
    status: "completed",
    username: "vikram",
    email: "vikram.shah@hotmail.com",
  },
  {
    id: "728ed527",
    amount: 210,
    status: "failed",
    username: "isha",
    email: "isha.patel@gmail.com",
  },
  {
    id: "728ed528",
    amount: 640,
    status: "completed",
    username: "manoj",
    email: "manoj.reddy@yahoo.com",
  },
  {
    id: "728ed529",
    amount: 870,
    status: "pending",
    username: "kavya",
    email: "kavya.iyer@gmail.com",
  },
  {
    id: "728ed530",
    amount: 300,
    status: "completed",
    username: "rohit",
    email: "rohit.verma@outlook.com",
  },
  {
    id: "728ed531",
    amount: 540,
    status: "failed",
    username: "megha",
    email: "megha.jain@gmail.com",
  },
  {
    id: "728ed532",
    amount: 720,
    status: "completed",
    username: "sandeep",
    email: "sandeep.yadav@yahoo.com",
  },

]
}
const PaymentsPage=async()=>{
    const data=await getData()
    return(
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
            <h1 className="font-semibold">All payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
            </div>
    )
}
export default PaymentsPage