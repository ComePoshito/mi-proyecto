import { serviciosData } from '../data/serviciosData';

function Servicio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
      
      {/* Contenedor de la grilla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviciosData.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
            {/* Imagen principal de la tarjeta */}
            <img 
              src={item.imagen} 
              alt={item.titulo} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />

            {/* Contenido de texto */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600 mb-4">{item.descripcion}</p>
            </div>

            {/* Etiqueta de tecnología al final */}
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {item.tecnologia}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicio;