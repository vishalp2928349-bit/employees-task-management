import React, { useContext } from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = (props) => {
  const [authData] = useContext(AuthContext);

  // If authData is not loaded yet
  if (!authData) {
    return (
      <div className="bg-[#1c1c1c] h-screen flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  // Get the latest employee details from AuthContext
  const employee = authData.employees.find(
    (emp) => emp.email === props.data.email
  );

  // If employee is not found
  if (!employee) {
    return (
      <div className="bg-[#1c1c1c] h-screen flex justify-center items-center text-white text-2xl">
        Employee Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-10">
      <Header
        changeUser={props.changeUser}
        data={employee}
      />

      <TaskListNumber data={employee} />

      <TaskList data={employee} />
    </div>
  );
};

export default EmployeeDashboard;