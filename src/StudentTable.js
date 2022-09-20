import studentData from "./utility/studentData";
import { Table } from "antd";
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'firstName',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'lastName',
    dataIndex: 'lastName',
    key: 'lastName',
  },
   {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
   {
    title: 'gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'ip_address',
    dataIndex: 'ip_address',
    key: 'ip_address',
  },
];
export default function StudentTable (){
  return(
  <Table dataSource={studentData()} columns={columns} />
  )
}



// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];