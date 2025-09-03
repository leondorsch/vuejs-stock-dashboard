<template>
  <section class="max-width">
    <HeadComponent />
    <section class="main">
      <section class="companies-section">
        <CompaniesSection />
      </section>
      <section class="revenue-section">
        <RevenueCard />
        <RevenueBreakdownCard />
      </section>
      <section class="income-and-growth-section">
        <NetIncomeCard />
        <GrossMarginCard />
        <RevenueGrowthCard />
      </section>
    </section>
  </section>


</template>

<script>

import CompaniesSection from './components/CompaniesSection.vue';
import GrossMarginCard from './components/GrossMarginCard.vue';
import HeadComponent from './components/HeadComponent.vue';
import NetIncomeCard from './components/NetIncomeCard.vue';
import RevenueBreakdownCard from './components/RevenueBreakdownCard.vue';
import RevenueCard from './components/RevenueCard.vue';
import RevenueGrowthCard from './components/RevenueGrowthCard.vue';
import { stockService } from './services/stockService'

export default {
  name: 'App',
  components: {
    HeadComponent,
    CompaniesSection,
    RevenueCard,
    RevenueBreakdownCard,
    NetIncomeCard,
    GrossMarginCard,
    RevenueGrowthCard
  },
  async created() {
    this.data = await stockService.getRevenue('$AAPL');
    console.log(this.data);
    this.data = await stockService.fetchData('$AAPL');
    console.log(this.data);
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Rubik', sans-serif;
  color: #FFFFFF;
  overflow-x: hidden;
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

.main {
  padding: 96px 100px;
}

.max-width {
  max-width: 1440px;
  margin: 0 auto;
}


.revenue-section {
  padding-top: 40px;
  display: flex;
  gap: 32px;
}

.income-and-growth-section {
  padding-top: 40px;
  display: flex;
  gap: 32px;
  justify-content: space-between;
}
</style>
