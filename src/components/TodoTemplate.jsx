import "./TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">ToDo</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
