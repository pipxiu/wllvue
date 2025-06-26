<template>
  <div class="skill-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="skill-number" :style="{ color: hover ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.15)' }">
      {{ number }}
    </div>
    <h2 class="skill-title">{{ title }}</h2>
    <p class="skill-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    title: String,
    description: String
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.skill-card {
  background: rgba(30, 41, 59, 0.7);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 116, 139, 0.2);
  position: relative;
  overflow: hidden;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(56, 189, 248, 0.3);
}

.skill-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.skill-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #38bdf8;
}

.skill-description {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.skill-card {
  animation: fadeIn 0.6s ease forwards;
}
</style>