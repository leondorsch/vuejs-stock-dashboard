<template>
    <div class="card">
        <div class="company-head">
            <img class="company-img" :src="logo" alt="">
            <span class="company-name">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    logo: String,
    revenue: Number,
    delta: Number,
    percent: Number
})
</script>

<style scoped>
.card {
    background: #011F35;
    padding: 20px 24px;
    border-radius: 16px;
    width: 172px;
    height: 142px;
    display: flex;
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
</style>