import peoplePlanner from '../Assets/pp.webp'
import latam from '../Assets/latam.webp'

function Experiencia() {
  return (
    <section className='mb-20'>
      <h2 className='text-3xl font-bold mb-8'>Mi experiencia laboral</h2>
      
      <div className="flex">
        <h4 className='font-semibold hidden lg:block text-base mt-5 min-w-40'>Marzo 2024 - Actualidad</h4>
        <div className='ml-4 border-l-2 border-rose-300 pl-8 relative'>
          <div className="w-3 h-3 bg-rose-500 rounded-full absolute dot"></div>
          <h3 className='text-2xl font-semibold text-rose-500 my-2'>Full Stack Developer</h3>
          <h4 className='font-semibold lg:hidden'>Marzo 2024 - Actualidad</h4>
          <h5 className='text-rose-500 font-medium my-3'>People Planner: SaaS de gestión de personal</h5>
          <ol className='list-disc ml-8 mb-8'>
            <li>Mantenimiento y desarrollo de funcionalidades de la plataforma “PeoplePlanner”, sistema de gestión de recursos humanos. </li>
            <li>Migración de funcionalidades de JavaScript a React, mejorando la mantenibilidad y eficiencia del frontend. </li>
            <li>Optimización del backend con arquitectura hexagonal y Serverless Framework, incorporando WebSocket para comunicación en tiempo real. </li>
            <li>Tecnologías utilizadas: <b className='font-semibold'>React.js, JavaScript, Node.js, Express, MariaDB, Serverless, AWS.</b></li>
          </ol>
          <img src={peoplePlanner} alt="People Planner" className='shadow-lg rounded-xl mb-9 mx-auto' />

          <h5 className='text-rose-500 font-medium my-3'>SaaS de evaluación de pilotos (LATAM)</h5>
          <ol className='list-disc ml-8 mb-8'>
            <li>Desarrollo de plataforma de evaluación de pilotos, con funcionalidad online y offline. </li>
            <li>Implementación de formularios dinámicos en React.js, uso de Service Workers e IndexedDB para soporte sin conexión.</li>
            <li>Contribución en el diseño de arquitectura y experiencia de usuario, optimizando el proceso de evaluación de más de 4800 usuarios en Latinoamérica.</li>
            <li>Tecnologías utilizadas: <b className='font-semibold'>React.js, Service Workers, IndexedDB, JavaScript, SAP CAP, SAP S/HANA</b></li>
          </ol>
          <img src={latam} alt="Web Formularios LATAM" className='shadow-lg rounded-xl mb-6 mx-auto' />
        </div>
      </div>
      
      <div className="flex">
        <h4 className='font-semibold hidden lg:block text-base mt-5 min-w-40'>Julio 2023 - Diciembre 2023</h4>
        <div className='ml-4 border-l-2 border-rose-300 pl-8 relative'>
          <div className="w-3 h-3 bg-rose-500 rounded-full absolute dot"></div>
          <div className='my-4'>
            <h3 className='text-2xl font-semibold text-rose-500 my-2'>Full Stack Developer + IA Engineer</h3>
            <h4 className='font-semibold lg:hidden'>Julio 2023 - Diciembre 2023</h4>
          </div>
          <h5 className='text-rose-500 font-medium my-3'>Chatbot Web + IA</h5>
          <ol className='list-disc ml-8 mb-8'>
            <li>Desarrollo y liderazgo del desarrollo del chatbot en React.js y despliegue eficiente en AWS S3 y Lambda.</li>
            <li>Integración de Inteligencia Artificial para generar respuestas en lenguaje natural basadas en la información de la base de datos
              del proyecto.</li>
            <li>Mejora del chatbot para la generación dinámica de gráficos y journey maps en respuesta a las consultas.</li>
            <li>Tecnologías utilizadas: <b className='font-semibold'>React.js, OpenAI API, Python, Langchain, Neo4j, Serveless, AWS.</b></li>
          </ol>
          <h5 className='text-rose-500 font-medium my-3'>Implementación y gestión del software "OpenClinic"</h5>
          <ol className='list-disc ml-8 pb-12'>
            <li>Instalación de OpenClinic en entornos Windows y Linux (Ubuntu) utilizando Docker</li>
            <li>Configuración y administración de la base de datos MySQL requerida para OpenClinic.</li>
            <li>Replicación de datos desde MySQL a Neo4j utilizando Kafka y Confluent.</li>
            <li>Tecnologías utilizadas: <b className='font-semibold'>Docker, Ubuntu, MySQL, Kafka, Confluent, Neo4j.</b></li>
          </ol>
        </div>
      </div>

      <div className="flex">
        <h4 className='font-semibold hidden lg:block text-base mt-5 min-w-40'>Julio 2022 - Diciembre 2022</h4>
        <div className='ml-4 border-l-2 border-rose-300 pl-8 relative'>
          <div className="w-3 h-3 bg-rose-500 rounded-full absolute dot"></div>
          <h3 className='text-2xl font-semibold text-rose-500 my-2'>Full Stack Developer</h3>
          <h4 className='font-semibold lg:hidden'>Julio 2022 - Diciembre 2022</h4>
          <h5 className='text-rose-500 font-medium my-3'>Web de compra de boletos para concurso SERNANP</h5>
          <ol className='list-disc ml-8 mb-8'>
            <li>Definición de la arquitectura del proyecto con estándares de desarrollo y documentación. </li>
            <li> Desarrollo y supervisión integral del frontend y backend para la versión piloto, que resultó ganadora del concurso. </li>
            <li>Tecnologías utilizadas: <b className='font-semibold'>Angular, Node.js, Express, PostgreSQL.</b></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experiencia