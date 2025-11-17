export default function Values() {
  return (
    <section id="visjon" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Vår visjon</h2>
            <p className="mt-4 text-gray-700">Vi ønsker å gjøre automasjon og robotisering tilgjengelig for industrien på Vestlandet.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Kvalitet i alle ledd</h3>
            <p className="mt-2 text-gray-700">Vi er dedikert til å levere førsteklasses automasjons- og robotiseringsløsninger som oppfyller de høyeste standardene for kvalitet og pålitelighet.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-gray-200 p-4 bg-white">
                <p className="text-xs text-gray-500">01</p>
                <p className="mt-1 font-medium text-gray-900">Vi leverer kvalitet</p>
                <p className="mt-1 text-sm text-gray-600">Maksimere oppetid, minimere feil.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-white">
                <p className="text-xs text-gray-500">02</p>
                <p className="mt-1 font-medium text-gray-900">Robuste anlegg</p>
                <p className="mt-1 text-sm text-gray-600">Erfaring med å bygge for varighet.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 bg-white">
                <p className="text-xs text-gray-500">03</p>
                <p className="mt-1 font-medium text-gray-900">FAT</p>
                <p className="mt-1 text-sm text-gray-600">Samme personell fra prosjektstart til godkjent FAT.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
