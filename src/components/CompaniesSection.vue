<template>
  <div class="companies-container">
    <CompanyRevenueCardSmall v-for="company in companies" :key="company.name" :name="company.name"
      :logo="company.logo" />
  </div>
</template>

<script>
import CompanyRevenueCardSmall from './CompanyRevenueCardSmall.vue';
import appleLogo from '../assets/logos/apple_logo.svg';
import nvidiaLogo from '../assets/logos/nvidia_logo.svg';
import tslaLogo from '../assets/logos/tsla_logo.svg';
import metaLogo from '../assets/logos/meta_logo.svg';
import microsoftLogo from '../assets/logos/microsoft_logo.svg';
import googleLogo from '../assets/logos/google_logo.svg';
import amazonLogo from '../assets/logos/amz_logo.svg';

export default {
  name: 'CompaniesSection',
  components: {
    CompanyRevenueCardSmall
  },
  data() {
    return {
      companies: [
        {
          name: 'Apple',
          logo: appleLogo
        },
        {
          name: 'Nvidia',
          logo: nvidiaLogo
        },
        {
          name: 'Tsla',
          logo: tslaLogo
        },
        {
          name: 'Meta',
          logo: metaLogo
        },
        {
          name: 'Microsoft',
          logo: microsoftLogo
        },
        {
          name: 'Google',
          logo: googleLogo
        },
        {
          name: 'Amazon',
          logo: amazonLogo
        }
      ]
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