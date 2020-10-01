import React, { Component } from 'react';
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import employees from './employees.json';
import Table from './components/Table';
import SearchBar from './components/Search';


class App extends Component {
  state = {
    employees: employees,
    filter: employees
  }
  search = (e, searchName) => {
    // console.log("testing")
    console.log(searchName)
    e.preventDefault()
    
    const filtered = this.state.employees.filter(employee => {
      console.log(this.state.employees)
      if (employee.firstName.startsWith(searchName)) {
        return employee
      }
    }
    )
    console.log(filtered);
    this.setState({filter:filtered})
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <SearchBar search={this.search}/>
        <Table employees={this.state.filter} />
      </Wrapper>
    );
  }

}

export default App;
