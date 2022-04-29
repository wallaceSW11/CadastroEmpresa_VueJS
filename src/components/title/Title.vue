<template>
    <div class="title">
        <h2>{{text}}</h2>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        text: { type: String, default: '' }
    }
}
</script>

<style scoped>
  h2{
      color: var(--primary-color);
  }

</style>
