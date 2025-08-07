<template>
    <div class="head-container">
        <div class="blue-rectangle"></div>
        <span>The Magnificent Seven Companies</span>
    </div>
</template>

<script>
export default {
    name: 'HeadComponent'
}
</script>

<style>

.head-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 64px;
    gap: 24px;
}

.blue-rectangle {
    background-color: #39DAFF;
    width: 96px;
    height: 32px;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
}

.head-container {
    display: flex;
    color:#F9F9F9;
    font-size: 36px;
    font-weight: 500
}
</style>