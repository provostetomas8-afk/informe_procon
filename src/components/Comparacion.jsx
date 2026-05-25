export default function Comparacion() {
  return (
    <section
      id="comparacion"
      className="p-8 bg-white rounded-xl shadow-md m-6 overflow-x-auto"
    >
      <h1 className="text-4xl font-bold mb-6">
        Comparación de Marcos Regulatorios
      </h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-3">Marco</th>
            <th className="border p-3">País</th>
            <th className="border p-3">Objetivo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">Ley 21.459</td>
            <td className="border p-3">Chile</td>
            <td className="border p-3">
              Sancionar delitos informáticos
            </td>
          </tr>

          <tr>
            <td className="border p-3">GDPR</td>
            <td className="border p-3">Unión Europea</td>
            <td className="border p-3">
              Protección de datos personales
            </td>
          </tr>

          <tr>
            <td className="border p-3">ISO 27001</td>
            <td className="border p-3">Internacional</td>
            <td className="border p-3">
              Gestión de seguridad de la información
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}