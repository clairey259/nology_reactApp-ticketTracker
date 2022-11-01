import styles from "./App.module.scss";
import Counter from "./Components/Counter";
import EmployeeCard from "./Components/EmployeeCard";
import Header from "./Components/Header";
import employees from './Components/Data/EmployeeList'

const App = () => {

  const getCardJsx = (employee) => 
    <div  key={employee.id}>
      <EmployeeCard employee={employee} />
    </div>
  

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
       {employees.map(getCardJsx)}
      </section>
    </>
  );
};

export default App;
