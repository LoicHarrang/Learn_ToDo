import React, { useState } from 'react';
import './App.css'; // Assurez-vous de créer ce fichier CSS

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-textarea"
        />
        <button type="submit" className="submit-button">Ajouter Tâche</button>
      </form>
    </div>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (title, description) => {
    setTasks([...tasks, { title, description }]);
  };

  return (
    <div className="todo-list-container">
      <button onClick={() => setShowForm(!showForm)} className="toggle-form-button">
        {showForm ? 'Fermer' : 'Ajouter Tâche'}
      </button>
      {showForm && <AddTaskForm addTask={addTask} />}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <strong>{task.title}</strong> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
