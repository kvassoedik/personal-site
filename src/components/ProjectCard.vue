<template>
  <div class="image-card">
    <img :src="src1" class="side-image" />
    <div class="content">
      <h2>{{ title }}</h2>
      <a v-if="repo" :href="repo" target="_blank" rel="noopener noreferrer">репозиторий</a>
      <a id="deploy" v-if="deploy" :href="deploy" target="_blank" rel="noopener noreferrer">деплой</a>
      <p>{{ text }}</p>
    </div>
    <img :src="src2" class="side-image" />
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    src1: {
      type: String,
      required: true,
    },
    src2: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    repo: {
        type: String,
        required: false,
        default: null,
    },
    deploy: {
        type: String,
        required: false,
        default: null,
    },
  },
}
</script>

<style scoped>
.image-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin: 20px;
}

.side-image {
  width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

.content {
  flex: 1;
  text-align: center;
}

.content h2 {
  margin: 0;
  font-size: 1.5rem;
}

.content p {
  margin-top: 10px;
  font-size: 1rem;
}

a {
    display: block;
    margin-bottom: 4px;
    color: var(--color-accent-main);
}
</style>
