export default function Lista({ tarefas, onRemoverTarefa }) {
  if (tarefas.length === 0) {
    return <p className="text-slate-500 text-sm">Nenhuma tarefa pendente no momento.</p>;
  }

  return (
    <ul className="space-y-2">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className="flex justify-between items-center bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg"
        >
          <span className="text-slate-800">{tarefa.titulo}</span>
          <button
            onClick={() => onRemoverTarefa(tarefa.id)}
            className="text-sm text-red-600 font-medium hover:underline"
          >
            Concluir / Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
