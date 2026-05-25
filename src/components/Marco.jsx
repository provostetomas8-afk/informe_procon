export default function Marco() {
  return (
    <section
      id="marco"
      className="p-8 bg-white rounded-xl shadow-md m-6"
    >
      <h1 className="text-4xl font-bold mb-4">
        Marco Normativo
      </h1>

      <p className="mb-4">
        El análisis del caso considera normativa chilena e internacional
        relacionada con delitos informáticos y protección de datos.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Ley 21.459 sobre delitos informáticos</li>
        <li>Ley 19.628 sobre protección de datos personales</li>
        <li>GDPR</li>
        <li>ISO 27001</li>
      </ul>
    </section>
  );
}