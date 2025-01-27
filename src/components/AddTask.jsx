import { useState } from "react"

function AddTask( {onAddTasksSubmit} ) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
            <Input
                type="text"
                placeholder="Digite o título da tarefa"
                value={title} 
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert('Tarefa sem os dados necessários')
                    }
                        onAddTasksSubmit(title, description)
                        setTitle('')
                        setDescription('')                    
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar
            </button>
        </div>
    )
}

export default AddTask