<template>
  <HeadComponent/>
  <RevenueCard />
</template>

<script>

import HeadComponent from './components/HeadComponent.vue';
import RevenueCard from './components/RevenueCard.vue';
import { stockService } from './services/stockService'

export default {
  name: 'App',
  components: {
    HeadComponent,
    RevenueCard,
  },
  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log(this.data);
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Rubik', sans-serif;
}

#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: medium;
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}



</style>
