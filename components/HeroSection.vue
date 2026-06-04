<template>
  <section class="hero-bg text-white py-20 px-8 text-center">
    <div class="max-w-3xl mx-auto flex flex-col items-center gap-6">

      <div class="flex flex-col items-center gap-4">
        <h1 class="text-5xl font-bold tracking-tight">
          Laeti Challant
        </h1>
        <p class="text-xl font-semibold leading-relaxed drop-shadow-sm">
          Développeuse d'applications en reconversion professionnelle<br />
          <span class="text-base font-medium">
            Titulaire du TP DWWM · Concepteur Développeur d'Applications
          </span>
        </p>
      </div>

      <div class="my-2">
        <img
          src="~/assets/images/portrait-lc-sans-bg.webp"
          alt="Laeti Challant"
          class="w-44 h-44 rounded-full object-cover ring-4 ring-white/70 shadow-2xl"
        />
      </div>

      <div class="flex flex-col sm:flex-row gap-4 mt-2">
        <a
          href="#contact"
          class="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
        >
          Me contacter
        </a>
        <a
          href="#projects"
          class="inline-block px-8 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/50 hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          Voir mes projets
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-bg {
  background: linear-gradient(135deg, #fe9a66 0%, #f7d59b 35%, #764ba2 100%);
}
</style>
