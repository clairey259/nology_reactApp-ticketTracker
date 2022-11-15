import styles from "./App.module.scss";
import EmployeeCard from "./Components/EmployeeCard";
import Header from "./Components/Header";
import employees from './Components/Data/EmployeeList'

const App = () => {

  const getCardJsx = (employee) => 
    <div  key={employee.id} data-testid="singleEmployeeCard">
      <EmployeeCard employee={employee} />
    </div>
  

  return (
    <>
      <section data-testid="header">
        <Header />
      </section>
      <section className={styles.employeeCardDisplay} data-testid="employeeCard">
       {employees.map(getCardJsx)}
      </section>
    </>
  );
};

export default App;