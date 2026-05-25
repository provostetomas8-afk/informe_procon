export default function Datos() {
  return (
    <section
      id="datos"
      className="p-8 bg-white rounded-xl shadow-md m-6"
    >
      <h1 className="text-4xl font-bold mb-4">
        Datos Personales
      </h1>

      <p className="mb-4">
        Los datos de clientes bancarios son considerados información
        sensible y deben protegerse según la Ley 19.628.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Derechos ARCO
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Acceso</li>
        <li>Rectificación</li>
        <li>Cancelación</li>
        <li>Oposición</li>
      </ul>
    </section>
  );
}