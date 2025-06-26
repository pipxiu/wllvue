<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">关于我</h1>

      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="title-image">
            <img src="@/assets/images/about3.jpg" alt="关于我的图片">
          </div>
          
          <div class="about-text">
            <h2>王玲珑 / 皮皮休</h2>
            <p>All For Passion</p>
            
            <div class="about-details">
              <div class="detail-item">
                <i class="fas fa-graduation-cap"></i>
                <div>
                  <h3>教育背景</h3>
                  <p>湖南师范大学 - 教育技术学（2022级）</p>
                </div>
              </div>
              
              <div class="detail-item">
                <i class="fas fa-briefcase"></i>
                <div>
                  <h3>兴趣爱好</h3>
                  <p>美食、旅行、音乐、摄影、看电影</p>
                  <p>最爱的美食：蛋挞、芋泥......</p>
                  <p>最爱的音乐：《还是会》、《慢慢等》、《R.I.P》</p>
                  <p>最爱的电影：《指环王》、《霍比特人》</p>
                  <p>最爱：韦礼安、王栎鑫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
/* 新增响应式图片高度 */
.title-image {
  width: 100%;
  max-width: 800px; /* 限制最大宽度 */
  height: 500px; /* 大屏幕高度 */
  margin: 0 auto 2rem; /* 上下外边距，水平居中 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* 小屏幕调整图片高度 */
@media (max-width: 768px) {
  .title-image {
    height: 300px;
  }
}

.title-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.title-image:hover img {
  transform: scale(1.05);
}

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

.about-text h2 {
  font-size: 2rem;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.about-text p {
  color: #94a3b8;
  margin-bottom: 2rem;
}

.about-details {
  background: rgba(30, 41, 59, 0.7);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 116, 139, 0.2);
}

.detail-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.detail-item i {
  font-size: 1.5rem;
  color: #38bdf8;
  margin-top: 5px;
}

.detail-item h3 {
  font-size: 1.2rem;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.detail-item p {
  color: #cbd5e1;
  margin-bottom: 0.5rem;
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
  .main-content {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-text h2 {
    font-size: 1.8rem;
  }
}
</style>