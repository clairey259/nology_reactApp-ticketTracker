import React from "react";
import Styles from "./EmployeeCard.module.scss";
import Counter from "../Counter";

const EmployeeCard = (props) => {
  const { name, role } = props.employee;

  return (
    <>
      <div className={Styles.card}>
        <h2>Name: {name}</h2>
        <h3>Role: {role}</h3>
        <section>
          <Counter />
        </section>
      </div>
    </>
  );
};

export default EmployeeCard;
