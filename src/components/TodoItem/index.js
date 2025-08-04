import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteeTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteeTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
