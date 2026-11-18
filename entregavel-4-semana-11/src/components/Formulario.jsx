import { useState } from 'react';

export default function Formulario({ onAdicionarTarefa }) {
  const [texto, setTexto] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!texto.trim()) return;
    onAdicionarTarefa(texto.trim());
    setTexto('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma nova tarefa..."
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
        Adicionar
      </button>
    </form>
  );
}
