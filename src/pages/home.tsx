import React from 'react'; 
import { ShieldAlert, Bug, Lock } from 'lucide-react';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección Principal */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aprende sobre Seguridad en Aplicaciones</h1>
          <p className="text-xl mb-8">
            Descubre cómo proteger tus datos y utilizar aplicaciones de manera segura a través de nuestra plataforma educativa.
          </p>
        </div>
      </div>

      {/* Sección de Contenido Educativo */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué es importante conocer los riesgos de los Mods?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <ShieldAlert size={48} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seguridad Digital</h3>
            <p className="text-gray-600">
              Aprende cómo las modificaciones de aplicaciones pueden comprometer la seguridad de tus dispositivos y datos personales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Bug size={48} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Impacto en la Privacidad</h3>
            <p className="text-gray-600">
              Descubre cómo los permisos excesivos en aplicaciones modificadas pueden poner en riesgo tu privacidad en línea.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Lock size={48} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Uso Responsable de la Tecnología</h3>
            <p className="text-gray-600">
              Fomenta el uso ético de las aplicaciones y desarrolla hábitos digitales seguros a través de nuestros cursos interactivos.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Información Adicional */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Más Información y Experiencias de Usuarios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">¿Cómo afectan los Mods a la educación digital?</h3>
              <p className="text-gray-600 mb-4">
                En el mundo digital, aprender a identificar riesgos en aplicaciones modificadas es clave para un uso responsable de la tecnología. 
                Nuestra plataforma te enseñará a diferenciar aplicaciones seguras de aquellas que pueden representar una amenaza para tus datos y dispositivos.
              </p>
              <p className="text-gray-600">
                A través de nuestros módulos educativos, comprenderás los fundamentos de la ciberseguridad y cómo evitar vulnerabilidades en tu entorno digital.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Experiencias de Estudiantes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-gray-600 italic">"Gracias a esta plataforma, aprendí a reconocer aplicaciones peligrosas y ahora sé cómo proteger mi información personal."</p>
                  <p className="text-gray-800 font-semibold mt-2">- Carolina Méndez, estudiante de informática</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-gray-600 italic">"Nunca imaginé que los mods pudieran ser tan riesgosos. Esta aplicación me ayudó a entender la importancia de la seguridad digital."</p>
                  <p className="text-gray-800 font-semibold mt-2">- Alejandro Rojas, usuario de la plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
