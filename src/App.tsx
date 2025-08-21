import { useState } from 'react'
import {DataTable, type Column} from "./Components/DataTable";
import { InputField } from './Components/InputField';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
];
function App() {
  const [email,setEmail] = useState<string>('');
  const [selected, setSelected] = useState<User[]>([]);
  console.log(selected);
  return (
    <div className='px-4 py-6 flex flex-col gap-6'>
    <InputField
    type='email'
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  helperText="We’ll never share your email."
  errorMessage="Invalid email address"
  variant="outlined"
  size="md"
  clearable={true}
/>
<InputField loading={true} placeholder="Loading..." label='Loading' />
<InputField disabled={true}  label='Disabled' />
<InputField passwordToggle={true} label='Password' placeholder='Enter your password' />
<DataTable<User>
  data={sampleData}
  columns={columns}
  loading={false}
  selectable
  multiple
  onRowSelect={(rows) => setSelected(rows)}
  />
  </div>
  )
}

export default App
