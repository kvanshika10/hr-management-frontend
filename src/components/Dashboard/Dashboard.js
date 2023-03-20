import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";

const Dashboard = () => {
  const match = useRouteMatch();

  return (
    <div>
    

     <BrowserRouter>
  <Switch>
    <Route exact path="/" component={EmployeeList} />
    <Route path='/add-employee' component={AddEmployee} />
    <Route path='/delete/:id' component={DeleteEmployee} />
    <Route exact path='/edit/:id' component={EditEmployee} />
  </Switch>
</BrowserRouter>
     </div>
  );
};

export default Dashboard;