
export default function Hero() {
  return (
    <section className="container pt-12 pb-8 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-4xl font-bold">FitFlow — gear for stronger, healthier you</h1>
        <p className="mt-3 text-slate-600">Curated fitness essentials backed by quick shipping and a satisfaction guarantee.</p>
        <div className="mt-6 flex gap-3">
          <a className="btn btn-primary" href="#shop">Shop Now</a>
          <a className="btn" href="#why">Why FitFlow</a>
        </div>
      </div>
      <div className="card overflow-hidden">
        <img alt="fitness" src="https://images.unsplash.com/photo-1554284126-aa88f22d8d87?q=80&w=1600&auto=format&fit=crop" className="w-full h-[320px] object-cover" />
      </div>
    </section>
  )
}
