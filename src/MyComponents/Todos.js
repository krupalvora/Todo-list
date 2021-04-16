import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let footerstyle={
        minHeight:'70vh',   
        margin:'40px auto'
    }   
    return (
        <div className="container my-3"  style={footerstyle}>
            <h3 className=' my-3'>Todos list</h3>
            {props.todos.length === 0 ? "No items in list" :        
                    props.todos.map((todo) => {
                        return(
                         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })
            }
        </div>
    )
}
