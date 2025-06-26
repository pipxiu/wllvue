<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">关于我</h1>

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
/* 样式部分 */
.title-image {
  width: 100%;
  max-width: 800px; /* 限制最大宽度 */
  height: 500px; /* 固定高度 */
  margin: 0 auto 2rem; /* 上下外边距，水平居中 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
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

.banner-image {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/images/about3.jpg');
  
  background-position: center;
  /* 其余样式保持不变 */
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

.about-content {
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
}

.about-image {
  flex: 1;
}

.placeholder-image {
  width: 100%;
  height: 400px;
  background: linear-gradient(45deg, #1e293b, #334155);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 1.2rem;
}

.about-text {
  flex: 1;
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
  .about-content {
    flex-direction: column;
  }
}
</style>