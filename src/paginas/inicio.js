import { useState, useEffect } from 'react';

function Inicio() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al consumir la API:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-xl font-semibold">Cargando datos de la API...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Inicio - Destacados de la API</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={item.id || index} className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
            <img 
              src={item.url} 
              alt="API Item" 
              className="w-full h-40 object-cover rounded-md mb-3" 
            />
            <div className="space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-base text-blue-600">Elemento N° {index + 1}</p>
              <p><span className="font-medium">ID:</span> {item.id}</p>
              <p><span className="font-medium">Ancho:</span> {item.width} px</p>
              <p><span className="font-medium">Alto:</span> {item.height} px</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
