import logo from './logo.svg';
import './App.css';
import PersonForm from './component/form/PersonForm';
import EmployeeDetailForm from './component/form/EmployeeDetailForm'

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <h3>HOC Form App</h3>
      <PersonForm />
      {/* <EmployeeDetailForm /> */}
    </div>
  );
}

export default App;
