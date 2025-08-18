<script setup>
  import ProjectCard from '../components/ProjectCard.vue';
  import { ref } from 'vue'

  const projects = ref([
    {id: 1, src1: "libnet1.png", src2: "libnet2.png", title: "libnet", text: "Сайт-аггрегатор для библиотек, написанный в команде в рамках курса Capstone Project в Университете Иннополис. В команде я была главным фронтендером, занималась функциональной частью разработки. Использовался React, собранный Vite, также значимой частью было использование Rest API. Основной функционал - разные страницы для разных пользовательских ролей, возможность бронировать книги, отслеживать и менять статус брони, создавать и менять книги, библиотеки, назначать администраторов сайта и библиотекарей.", repo: "https://github.com/IU-Capstone-Project-2025/libnet"},
    {id: 2, src1: "portfolio1.png", src2: "portfolio2.png", title: "portfolio", text: "Первый полноценный сайт, написанный в рамках элективного курса по фронтенд разработке. По мере изучения, использовался HTML+CSS, JS, TS, React и Next.js", repo: "https://github.com/kvassoedik/kvassoedik.github.io", deploy: "https://kvassoedik-portfolio.vercel.app/"},
    {id: 3, src1: "coffeein1.png", src2: "coffeein2.png", title: "CoffeeIn", text: "Сайт для университетской кофейни, написанный в команде на курсе фронтенд разработки", repo: "https://github.com/i-geeg-i/Coffee-shop-bonus-system", deploy: "https://coffeeinno.vercel.app/"},
  ])
</script>

<template>
  <section>
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :src1="project.src1"
      :src2="project.src2"
      :title="project.title"
      :text="project.text"
      :repo="project.repo"
      :deploy="project.deploy"
    />
  </section>
</template>

