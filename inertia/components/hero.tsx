const Hero = () => {
  return (
    <section id="hero" className='flex flex-col justify-between items-center gap-8 md:flex-row'>
      <div className='flex flex-col gap-4'>
        <h1>Développez le monde !</h1>
        <p className="text-2xl text-muted-foreground">
          Des formations pour <span className="underline decoration-accent decoration-4">devenir un bon développeur</span>,{" "}
          <span className="underline decoration-accent decoration-4">maîtriser vos outils</span> et aller plus loin avec{" "}
          <span className="underline decoration-accent decoration-4">la cybersécurité</span> et <span className="underline decoration-accent decoration-4">le cloud</span>.
        </p>
      </div>
      <div>
        <img className="w-[500px] md:w-[750px]" src="/public/assets/images/e-unlock-hero.png" alt="Ville" />
      </div>
    </section>
  )
}

export default Hero
