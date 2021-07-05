<template>
  <div class="container">
    <Header />

    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.loading-skeleton {
  width: 220px;
  height: 330px;
  min-width: 220px;
  background-color: rgb(175, 175, 175);
  position: relative;

  .lds-ripple {
    display: inline-block;
    position: relative;
    top: 50%;
    left: 51%;
    transform: translate(-51%, -50%);
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
}
.slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.8s ease-out forwards;
    transition: opacity 0.8s;
  }

  .slide-leave-active {
    animation: slide-out 0.4s ease-out forwards;
    transition: opacity 0.4s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateX(55px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(55px);
    }
  }
</style>
