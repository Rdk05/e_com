import {memo} from 'react'

function CompTodo({todos, addTodos}){
    return(
        <>
             <div>
                <h1>My Todos</h1>
                {todos.map((t , i) => (
                    <h4>
                       {i} , {t}
                    </h4>
                ))}
            <button onClick={addTodos}>Add To Do</button>
            </div>
            <hr/>
        </>
    )
}


export default memo(CompTodo);