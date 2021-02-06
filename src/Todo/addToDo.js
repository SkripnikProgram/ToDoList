import { useContext, useState } from "react";
import React from "react";
import PropTypes from 'prop-types'
import classes from './addToDo.module.css'

let AddToDo = ({onCreate}) => {
    const [value, setValue] = useState('');
let sumbitHandler = (event) => {
    event.preventDefault()
    if (value.trim()){
        onCreate(value)
        setValue('')
    }
}
    
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <input value={value} onChange={event => setValue(event.target.value)} className={classes.input} />
      <button type="submit" className={classes.button}><strong>Add ToDo</strong></button>
    </form>
  );
};

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddToDo;
