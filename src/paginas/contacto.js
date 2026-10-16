function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-4">Envianos un mensaje</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
              <input 
                type="email" 
                placeholder="correo@ejemplo.com" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
              <textarea 
                rows="4" 
                placeholder="Escribe tu mensaje aquí..." 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Nuestra Ubicación (UCASAL)</h3>
          <div className="w-full h-full min-h-[300px] flex-grow rounded-lg overflow-hidden border">
            <iframe
              title="Ubicacion UCASAL"
              src="https://maps.google.com/maps?q=Universidad+Catolica+de+Salta,+Salta,+Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;
