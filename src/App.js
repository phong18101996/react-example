import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import Textfield from '@atlaskit/textfield';

function App() {
  return  (
    <>
      <h3>Danh sach can lam</h3>
      <Textfield name="add-todo"></Textfield>
    </>
  );
}

export default App;
