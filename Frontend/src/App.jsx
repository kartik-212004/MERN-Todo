import Navbar from "./navbar"
import Input from "./TodoInput"
import Todo from "./Todo"
export default function App() {
  return (
    <>
      <div className="box w-full h-screen bg-slate-200">
        <Navbar />
        <div className="content flex justify-center py-4">
          <Input />
        </div>
        <div className="list flex items-center flex-col ">
          <Todo />
        </div>
      </div>
    </>
  )
}