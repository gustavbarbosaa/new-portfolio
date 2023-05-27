<!-- eslint-disable max-len -->
<!-- eslint-disable max-len -->
<template>
  <div class="container-home h-full">
    <headerComponent />
    <section class="home h-full px-28 pt-8" id="home">
      <div class="container-home-body flex justify-between items-center mt-8">
        <div class="text flex flex-col justify-around gap-16">
          <div class="welcome">
            <h1 class="font-bold font-roboto text-4xl">Olá, tudo bem contigo?</h1>
            <p class="font-inter text-blue-400">É um prazer receber aqui em minha página!</p>
          </div>
          <div>
            <h2 class="font-bold font-mono text-3xl">Meu nome é</h2>
            <div class="machine">
              <h2 class="font-bold font-mono text-3xl">Gustavo Barbosa</h2>
            </div>
          </div>
        </div>
        <picture class="container-image">
          <img src="../assets/images/splash.svg" alt="Imagem de splash de tinta azul" class="splash">
          <img src="../assets/images/perfil.png" alt="Imagem de perfil" class="perfil-image">
        </picture>
      </div>
    </section>
    <section class="about-me h-full w-full flex flex-col items-center justify-between" id="about">
      <div class="header-about">
        <h1 class="text-center text-white text-4xl font-black font-mono p-8 tracking-wide">Descubra um pouco mais sobre quem sou! <br> 'Simboraaa'!</h1>
        <div class="emoji blee text-5xl bg-gray-600">
          <span>
            😝
          </span>
        </div>
        <div class="emoji smile text-5xl bg-gray-600">
          <span>
            😁
          </span>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="container-content-about text-gray-800 font-semibold bg-white w-1/2 h-96 p-8 rounded-lg">
          <img src="../assets/images/aspas.svg" alt="" class="w-10">
          <h2 class="text-center text-xl font-bold pb-4">Meu nome completo é Gustavo Henrique Araújo Barbosa!</h2>
          <p>Um jovem destemido de 20 anos que chama o sertão da Paraíba de lar, mais especificamente a cidade de Cajazeiras. Com uma mente inquisitiva e coração sedento por conhecimento, sou apaixonado por tecnologia e estou sempre em busca de novas oportunidades para expandir meus horizontes.</p>
          <p>Vejo na tecnologia uma janela para o mundo, uma oportunidade de conectar-se com pessoas de diferentes culturas e absorver conhecimentos valiosos.</p>
          <p>O amor pela tecnologia transcende a busca por uma carreira promissora. Uma paixão ardente que o impulsiona a nunca parar de aprender e se reinventar. Sonhando em fazer a diferença, utilizando a tecnologia como uma ferramenta para transformar vidas e impulsionar o seu desenvolvimento.</p>
        </div>
      </div>
    </section>
    <section class="work h-full w-full flex flex-col items-center justify-between" id="work">
      <div class="work-about">
        <h1 class="text-center text-4xl font-black font-mono p-8 tracking-wide">Veja agora um pouco sobre minhas realizações pessoais, profissionais e acadêmicas</h1>
      </div>
      <div class="flex-1 grid grid-cols-3 gap-8 items-center justify-center">
        <div class="card-experiences text-gray-800 font-semibold bg-white w-96 rounded-lg">
          <div>
            <img src="../assets/images/faculdade.jpg" alt="">
            <h2 class="text-center text-xl font-bold pb-4">Faculdade Católica da Paraíba</h2>
          </div>
          <p>Um jovem destemido de 20 anos que chama o sertão da Paraíba de lar, mais especificamente a cidade de Cajazeiras. Com uma mente inquisitiva e coração sedento por conhecimento, sou apaixonado por tecnologia e estou sempre em busca de novas oportunidades para expandir meus horizontes.</p>
        </div>
        <div class="card-experiences text-gray-800 font-semibold bg-white w-96 rounded-lg">
          <div>
            <img src="../assets/images/work.jpg" alt="">
            <h2 class="text-center text-xl font-bold pb-4">Netline Telecom</h2>
          </div>
          <p>Um jovem destemido de 20 anos que chama o sertão da Paraíba de lar, mais especificamente a cidade de Cajazeiras. Com uma mente inquisitiva e coração sedento por conhecimento, sou apaixonado por tecnologia e estou sempre em busca de novas oportunidades para expandir meus horizontes.</p>
        </div>
        <div class="card-experiences text-gray-800 font-semibold bg-white w-96 rounded-lg">
          <div>
            <img src="../assets/images/curso.jpg" alt="">
            <h2 class="text-center text-xl font-bold pb-4">Bootcamp de Desenvolvimento Full Stack</h2>
          </div>
          <p>Um jovem destemido de 20 anos que chama o sertão da Paraíba de lar, mais especificamente a cidade de Cajazeiras. Com uma mente inquisitiva e coração sedento por conhecimento, sou apaixonado por tecnologia e estou sempre em busca de novas oportunidades para expandir meus horizontes.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import headerComponent from '../components/Header/index.vue';

export default {
  components: {
    headerComponent,
  },
};

</script>

<style scoped>
.container-image {
  height: 450px;
  width: 450px;
  position: relative;
}

.splash, .perfil-image {
  position: absolute;
}

.perfil-image {
  height: 300px;
  top: 10%;
  left: 25%;
}

.machine {
  display: flex;
  justify-content: start;
  width: fit-content;
  overflow: hidden;
  border-right: 0.15rem solid #000000b3;
  white-space: nowrap;
  letter-spacing: 0.15rem;
  animation: text 4s steps(50);
}

@keyframes text {
  from {
    width: 0;
  }
  to {
    width: 78%;
  }
}

.about-me {
  background: linear-gradient(to bottom, rgba(95,165,250,1) 0%, rgba(0,125,255,1) 100%);
}

.header-about {
  position: relative;
}

.emoji {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  position: absolute;
  border-radius: 50%;
}

.smile {
  top: 50%;
  left: 8%;
  animation: rotate-inverse 4s infinite;
}

.blee {
  top: 10%;
  left: 97%;
  animation: rotate 2s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotate-inverse {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.container-content-about, .card-experiences {
  background: rgba( 255, 255, 255, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13.5px );
  -webkit-backdrop-filter: blur( 13.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.container-content-about p {
  text-align: justify;
  text-indent: 3rem;
}

</style>
