import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id:Math.random()*1000}])
    setInputText('');
  }
  return (
    <div>
      <form>
        <input value={inputText} className='text-field button-4' onChange={inputTextHandler} type="text" />
        <button type='submit' className='button-4 btn' onClick={submitTodoHandler}>
          Add
        </button>
      </form>
    </div>
  )
};
   
export default Form;
