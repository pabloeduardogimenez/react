import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <h2>Criar Tarefas</h2>
        <form >
            <input type="text" placeholder='Digite o Titulo' />
            <select>
                <option value="">Selecione uma Tarefas</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type="submit">Criar tarefas</button>
        </form>
    </div>
  )
}

export default TodoForm
