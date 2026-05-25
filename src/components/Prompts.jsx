export default function Prompts() {
  return (
    <section
      id="prompts"
      className="p-8 bg-white rounded-xl shadow-md m-6"
    >
      <h1 className="text-4xl font-bold mb-6">
        Bitácora de Uso de Inteligencia Artificial
      </h1>

      <div className="space-y-6 text-lg leading-relaxed">

        <div className="bg-gray-100 p-5 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Prompt 1 — Investigación del caso
          </h2>

          <p className="mb-2">
            Prompt utilizado:
          </p>

          <p className="italic mb-4">
            "Realiza un resumen detallado del ciberataque ocurrido
            al Banco de Chile en 2018, indicando cómo ocurrió,
            qué sistemas fueron afectados y cuáles fueron sus
            consecuencias financieras y operacionales."
          </p>

          <p>
            La respuesta entregó una visión general del incidente y
            permitió identificar conceptos importantes relacionados
            con malware, transferencias fraudulentas y seguridad
            bancaria.
          </p>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Prompt 2 — Marco legal
          </h2>

          <p className="mb-2">
            Prompt utilizado:
          </p>

          <p className="italic mb-4">
            "Explica qué artículos de la Ley 21.459 podrían aplicarse
            al caso Banco de Chile 2018 considerando acceso ilícito,
            fraude informático y afectación de sistemas."
          </p>

          <p>
            La IA ayudó a relacionar las acciones realizadas por los
            atacantes con delitos informáticos establecidos en la
            legislación chilena, facilitando el análisis jurídico
            posterior.
          </p>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Prompt 3 — Protección de datos
          </h2>

          <p className="mb-2">
            Prompt utilizado:
          </p>

          <p className="italic mb-4">
            "Describe cómo se aplica la Ley 19.628 y los derechos
            ARCO en un incidente financiero que involucre datos
            personales de clientes bancarios."
          </p>

          <p>
            La información obtenida permitió comprender de mejor manera
            las obligaciones relacionadas con la protección de datos
            personales y la responsabilidad institucional frente a los
            usuarios afectados.
          </p>
        </div>

        <div className="bg-gray-100 p-5 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Reflexión Final
          </h2>

          <p>
            El uso de herramientas de inteligencia artificial permitió
            acelerar la búsqueda de información, organizar ideas y
            comprender conceptos legales complejos relacionados con
            ciberseguridad. Sin embargo, fue necesario revisar,
            corregir y complementar parte de la información entregada
            para adaptarla correctamente al contexto chileno y a los
            requisitos específicos de la evaluación.
          </p>
        </div>

      </div>
    </section>
  );
}