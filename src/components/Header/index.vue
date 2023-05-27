<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header-container flex justify-between px-28 pt-8">
    <div class="logo">
      <router-link to="/">
        <h2 class="cursor-pointer text-xl font-bold"><span class="text-blue-400">gustav</span>barbosaa</h2>
      </router-link>
    </div>
    <nav>
        <ul class="font-semibold flex gap-10">
          <li class="hover:text-blue-400 transition-colors"><a href="#about">Sobre mim</a></li>
          <li class="hover:text-blue-400 transition-colors"><a href="#work">O que faço</a></li>
          <li class="hover:text-blue-400 transition-colors"><a href="#">Projetos</a></li>
        </ul>
    </nav>
  </header>
</template>

<script lang="ts">

export default {
  name: 'header-component',
};
</script>

<style scoped>

ul li {
  position: relative;
}

ul li::after {
  position: absolute;
  left: 0%;
  bottom: 0;
  content: '';
  height: 2px;
  width: 0%;
  border-radius: 999px;
  background:  #60a5fa;
  transition: all .4s ease-in-out;
}

ul li:hover::after {
  width: 100%;
}

</style>
