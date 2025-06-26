<template>
  <div class="portfolio-page">
    <div class="row justify-content-center">
      <div class="col-lg-6 mt-5 pt-5" data-aos="fade-up">
        <div class="section-header text-center">
          <span class="text-muted text-uppercase">Recent Works</span>
          <h1 class="display-1 txt-fx slide-up">摄影作品</h1>
          <p>How do you pick up the threads of an old life? How do you go on, when in your heart you begin to understand, there is no going back? There are some things that time cannot mend, some hurts that go too deep…that have taken hold.</p>
        </div>
      </div>
    </div>

    <div class="grid p-0 clearfix row row-cols-2 row-cols-lg-3 row-cols-xl-4" data-aos="fade-up">
      <!-- 作品网格 -->
      <div v-for="(item, index) in portfolioItems" :key="index" class="col mb-4 portfolio-item">
        <a :href="item.largeImage" class="image-link" :title="item.title">
          <img :src="item.thumbnail" class="img-fluid" :alt="item.title">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioItems: [
        {
          largeImage: require('@/assets/images/portfolio-large-1.jpg'),
          thumbnail: require('@/assets/images/portfolio-thumbnail-1.jpg'),
          title: 'Sample Caption goes here for Portfolio Item 1.'
        },
        // 添加更多作品项...
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 3rem;
  overflow-y: auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #f8fafc;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  border-radius: 2px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.work-btn {
  display: inline-block;
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

.work-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
}

.work-btn i {
  margin-left: 8px;
}

@media (max-width: 900px) {
  .container {
    flex-direction: column;
  }
  
  .main-content {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding: 1.5rem;
  }
}
</style>