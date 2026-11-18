<template>
  <section
    id="top"
    class="px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-24"
  >
    <div class="max-w-6xl mx-auto flex items-center gap-10 lg:gap-16 flex-wrap">
    <div class="flex-1 basis-[440px] min-w-[280px]">
      <div class="flex items-center gap-2.5 mb-6">
        <span class="w-2 h-2 rounded-full bg-accent inline-block" />
        <span class="text-sm font-semibold tracking-widest uppercase text-text-light">
          Disponible pour un CDI
        </span>
      </div>

      <h1
        class="font-display font-bold text-text-dark leading-[0.98] tracking-tight text-[clamp(52px,7.2vw,104px)] mb-7"
      >
        Laetitia<br />Challant
      </h1>

      <p class="text-xl md:text-[22px] leading-snug text-text-dark/90 max-w-[480px] font-medium mb-2">
        Conceptrice développeuse d'applications métier.
      </p>
      <p class="text-base text-text-light font-medium mb-10">
        Java / Spring Boot - 13 ans de terrain en production agroalimentaire
      </p>

      <div class="flex gap-4 flex-wrap">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-7 py-4 bg-text-dark text-white no-underline rounded-lg font-semibold text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          Me contacter <span aria-hidden="true">→</span>
        </a>
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-text-dark no-underline rounded-lg font-semibold text-[15px] border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          Voir mes projets
        </a>
      </div>
    </div>

    <div class="shrink-0 mx-auto lg:mx-0">
      <div class="relative w-[280px] h-[280px]">
        <div class="absolute -inset-4 rounded-full border border-border" />
        <div
          class="absolute -top-5 -right-6 w-14 h-14 rounded-full opacity-85 animate-floatSlow"
          style="background: linear-gradient(135deg, #764ba2, #fe9a66)"
        />
        <img
          src="~/assets/images/portrait-lc-sans-bg.webp"
          alt="Laetitia Challant"
          class="relative w-[280px] h-[280px] rounded-full object-cover block shadow-2xl"
        />
      </div>
    </div>
    </div>
  </section>
</template>
