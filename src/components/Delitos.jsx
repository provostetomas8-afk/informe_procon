export default function Delitos() {
  return (
    <section
      id="delitos"
      className="p-8 bg-white rounded-xl shadow-md m-6"
    >
      <h1 className="text-4xl font-bold mb-4">
        Delitos Informáticos
      </h1>

      <p className="mb-4">
        El ataque al Banco de Chile puede relacionarse con distintos delitos
        establecidos en la Ley 21.459.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Acceso ilícito a sistemas informáticos</li>
        <li>Fraude informático</li>
        <li>Interferencia de sistemas</li>
        <li>Uso de malware</li>
      </ul>
    </section>
  );
}