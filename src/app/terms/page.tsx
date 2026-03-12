export default function TermsPage() {
  return (
    <main className="py-24">

      <div className="container-rughaus max-w-3xl space-y-12">

        {/* HEADER */}

        <header className="space-y-4">

          <p className="text-xs uppercase tracking-[0.35em] text-rug-dark/40">
            Legal
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-rug-red">
            Términos y condiciones
          </h1>

          <p className="text-rug-dark/70">
            Al acceder y utilizar el sitio web de RUGHAUS aceptas los
            siguientes términos y condiciones. Te recomendamos leer
            cuidadosamente esta información antes de utilizar nuestros
            servicios o solicitar información sobre nuestros productos.
          </p>

        </header>

        {/* CONTENT */}

        <section className="space-y-8 text-rug-dark/80">

          {/* Uso del sitio */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Uso del sitio
            </h2>

            <p>
              Este sitio web tiene como objetivo proporcionar información
              sobre los productos y servicios ofrecidos por RUGHAUS.
              El uso del sitio debe realizarse únicamente con fines
              informativos y personales.
            </p>
          </div>

          {/* Propiedad intelectual */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Propiedad intelectual
            </h2>

            <p>
              Todos los contenidos presentes en este sitio, incluyendo
              imágenes, textos, diseños, logotipos y composiciones
              visuales, son propiedad de RUGHAUS o se utilizan con
              autorización correspondiente. Queda prohibida su
              reproducción o uso sin consentimiento previo.
            </p>
          </div>

          {/* Información del producto */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Información del producto
            </h2>

            <p>
              Nos esforzamos por mantener la información del sitio
              actualizada y precisa. Sin embargo, las características
              de los productos, disponibilidad o especificaciones
              pueden cambiar sin previo aviso.
            </p>
          </div>

          {/* Proyectos personalizados */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Proyectos personalizados
            </h2>

            <p>
              Las solicitudes de diseño personalizado están sujetas
              a revisión y aprobación por parte de nuestro equipo.
              Cada proyecto puede requerir comunicación adicional
              para definir materiales, dimensiones y condiciones
              de producción.
            </p>
          </div>

          {/* Limitación de responsabilidad */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Limitación de responsabilidad
            </h2>

            <p>
              RUGHAUS no se hace responsable por daños o pérdidas
              derivados del uso del sitio web o de la interpretación
              de la información presentada en él.
            </p>
          </div>

          {/* Cambios */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Cambios en los términos
            </h2>

            <p>
              Nos reservamos el derecho de modificar estos términos
              y condiciones en cualquier momento. Cualquier cambio
              será publicado en esta página.
            </p>
          </div>

          {/* Contacto */}

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-rug-red">
              Contacto
            </h2>

            <p>
              Si tienes preguntas sobre estos términos y condiciones
              puedes comunicarte con nosotros a través de nuestra
              página de contacto.
            </p>
          </div>

        </section>

      </div>

    </main>
  );
}