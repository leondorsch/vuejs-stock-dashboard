<template>
  <div class="companies-container">
    <CompanyRevenueCardSmall v-for="company in companies" :key="company.name" :name="company.name"
      :revenue="company.revenue" :logo="company.logo" />
  </div>
</template>

<script>
import CompanyRevenueCardSmall from './CompanyRevenueCardSmall.vue';
import appleLogo from '../assets/logos/apple_logo.svg';
// import nvidiaLogo from '../assets/logos/nvidia_logo.svg';
// import tslaLogo from '../assets/logos/tsla_logo.svg';
// import metaLogo from '../assets/logos/meta_logo.svg';
// import microsoftLogo from '../assets/logos/microsoft_logo.svg';
// import googleLogo from '../assets/logos/google_logo.svg';
// import amazonLogo from '../assets/logos/amz_logo.svg';
import { stockService } from '@/services/stockService';

export default {
  name: 'CompaniesSection',
  components: {
    CompanyRevenueCardSmall
  },
  data() {
    return {
      companies: [
        { key: '$AAPL', name: 'Apple', logo: appleLogo, revenue: null, revenueRow: 3 },
        // { key: '$NVDA', name: 'Nvidia', logo: nvidiaLogo, revenue: null, revenueRow: 3 },
        // { key: '$TSLA', name: 'Tsla', logo: tslaLogo, revenue: null, revenueRow: 11 },
        // { key: '$META', name: 'Meta', logo: metaLogo, revenue: null, revenueRow: 3 },
        // { key: '$MSFT', name: 'Microsoft', logo: microsoftLogo, revenue: null, revenueRow: 7 },
        // { key: '$GOOG', name: 'Google', logo: googleLogo, revenue: null, revenueRow: 3 },
        // { key: '$AMZN', name: 'Amazon', logo: amazonLogo, revenue: null, revenueRow: 7 },
      ],
    }
  },
  async created() {
    await this.loadRevenue();
  },
  methods: {
    async loadRevenue() {
      for (let company of this.companies) {
        try {
          let revenue = await stockService.getRevenue(company.key, company.revenueRow);
          company.revenue = revenue.at(-1);

        } catch (e) {
          console.error(`Fehler beim Laden von ${company.name}`, e);
        }
      }
    }
  }
}
</script>

<style scoped>
.companies-container {
  width: 1223.60302734375;
  height: 192px;
  border-radius: 20px;
  display: flex;
  gap: 24px;
  background: #023A6233;
  align-items: center;
  padding: 20px 24px;
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: #023A6233 #011F35;
}
</style>