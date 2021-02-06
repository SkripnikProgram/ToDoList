import React from 'react'
import ToDoItem from './ToDoItem/ToDoItem'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

let ToDoList = (props) =>{
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}
ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default ToDoList