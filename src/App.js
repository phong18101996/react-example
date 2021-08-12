import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setTodoList([...todoList, { id: v4(), name : textInput, isCompleted: false}]);
  }
  return  (
    <>
      <h3>Danh sach can lam</h3>
      <Textfield name="add-todo" placeholder="thêm việc cần làm" elemAfterInput={
        <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>
          Thêm
        </Button>
      }
      css={{ padding: "2px 4px 2px" }}
      value={ textInput }
      onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList = {todoList} />
    </>
  );
}

export default App;
