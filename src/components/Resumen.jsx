export default function Resumen() {
  return (
    <section
      id="resumen"
      className="p-8 bg-white rounded-xl shadow-md m-6"
    >
      <h1 className="text-4xl font-bold mb-6">
        Resumen Ejecutivo
      </h1>

      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          En mayo de 2018 el Banco de Chile sufrió uno de los
          ciberataques más importantes registrados en el sistema
          financiero chileno. El incidente afectó diversos sistemas
          internos de la institución y provocó pérdidas millonarias
          relacionadas con transferencias fraudulentas realizadas
          mediante el sistema internacional SWIFT.
        </p>

        <p>
          Los atacantes utilizaron malware para comprometer equipos
          internos del banco, eliminando información y afectando
          estaciones de trabajo como mecanismo de distracción mientras
          se ejecutaban operaciones financieras ilícitas en paralelo.
          Esto dificultó inicialmente la detección del fraude y retrasó
          la respuesta operativa de la organización.
        </p>

        <p>
          El caso generó gran impacto mediático y abrió un debate sobre
          la preparación de las instituciones financieras chilenas frente
          a amenazas de ciberseguridad cada vez más sofisticadas.
          Además, evidenció la importancia de implementar controles
          preventivos, monitoreo constante y protocolos adecuados para
          proteger datos sensibles y operaciones críticas.
        </p>

        <p>
          Desde el punto de vista legal, este incidente permite analizar
          la aplicación de normas nacionales e internacionales
          relacionadas con delitos informáticos, protección de datos
          personales, responsabilidades institucionales y estándares de
          seguridad de la información.
        </p>
      </div>
    </section>
  );
}