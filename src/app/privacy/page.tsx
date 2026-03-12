export default function PrivacyPage() {
  return (
    <main className="py-24">

      <div className="container-rughaus max-w-3xl space-y-12">

        {/* HEADER */}

        <header className="space-y-4">

          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40">
            Legal
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-rug-red">
            Política de privacidad
          </h1>

          <p className="text-rug-dark/70">
            En RUGHAUS valoramos la privacidad de nuestros visitantes
            y clientes. Esta política explica cómo recopilamos,
            utilizamos y protegemos la información que nos proporcionas.
          </p>

        </header>

        {/* CONTENT */}

        <section className="space-y-8 text-rug-dark/80">

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Información que recopilamos
            </h2>

            <p>
              Podemos recopilar información personal cuando utilizas
              nuestros formularios de contacto o solicitas información
              sobre nuestros productos. Esta información puede incluir
              tu nombre, dirección de correo electrónico y detalles
              relacionados con tu proyecto.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Uso de la información
            </h2>

            <p>
              La información recopilada se utiliza únicamente para
              responder a tus consultas, proporcionar información
              sobre nuestros productos o gestionar solicitudes
              relacionadas con proyectos personalizados.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Protección de datos
            </h2>

            <p>
              Nos comprometemos a proteger tu información personal
              y a utilizar medidas razonables para evitar el acceso
              no autorizado, la divulgación o el uso indebido de
              tus datos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Compartir información
            </h2>

            <p>
              No vendemos ni compartimos tu información personal con
              terceros, excepto cuando sea necesario para cumplir con
              requisitos legales o responder a solicitudes legítimas
              de autoridades.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Contacto
            </h2>

            <p>
              Si tienes preguntas sobre esta política de privacidad
              o sobre cómo manejamos tu información, puedes
              contactarnos a través de nuestra página de contacto.
            </p>
          </div>

        </section>

      </div>

    </main>
  );
}