import { useState, useEffect } from 'react';

export default function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Cleanup function para limpar o timer ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 text-blue-900 px-4 py-3 rounded-xl mb-6 flex justify-between items-center">
      <span className="font-medium">Tempo com a página aberta (useEffect + cleanup):</span>
      <strong className="text-lg">{segundos}s</strong>
    </div>
  );
}
