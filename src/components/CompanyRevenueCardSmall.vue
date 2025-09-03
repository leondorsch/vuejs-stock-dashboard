<template>
    <div class="card">
        <div class="company-head">
            <img class="company-img" :src="logo" alt="">
            <span class="company-name">{{ name }}</span>
        </div>
        <span class="revenue-quartal">Revenue {{ quarter }}</span>
        <div class="revenue-amount">
            {{ revenue }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    logo: String,
    revenue:  Number,
    delta: Number,
    percent: Number
})

import { computed } from 'vue';

let quarter = computed(() => {
    let today = new Date();
    let year = today.getFullYear();
    let q = Math.floor((today.getMonth()  ) / 4);
    return `Q${q} ${year}`;
});


</script>

<style scoped>
.card {
    background: #011F35;
    padding: 20px 24px;
    border-radius: 16px;
    width: 172px;
    height: 142px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.company-head {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 8px;
}

.company-img {
    height: 20px;
    width: 20px;
}

.company-name {
    font-family: Rubik;
    font-weight: 500;
    font-style: Medium;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
}

.revenue-quartal {
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
}
</style>