<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">作品集</h1>
      
      <div class="section-header my-5">
        <div class="row justify-content-center g-5">
          <div class="col-lg-6">
            <span class="text-muted text-uppercase">some of my works</span>
            <h2 class="display-1 txt-fx slide-up">摄影作品</h2>
            <p>“That there's some good in this world, Mr. Frodo. And it's worth fighting for.”——Sam</p>
          </div>
        </div>
      </div>
      
      <div class="works-grid">
        <div 
          v-for="(work, index) in works" 
          :key="index" 
          class="work-item"
          :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${work.image})` }"
        >
          <h3>{{ work.title }}</h3>
          <p>{{ work.category }}</p>
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
  },
  data() {
    return {
      works: [
        {
          title: '个人博客',
          category: '网页设计',
          image: 'src/assets/images/port-item1.png'
        },
        {
          title: '公众号',
          category: '内容创作',
          image: 'src/assets/images/port-item2.png'
        },
        {
          title: '微信小程序',
          category: '应用开发',
          image: 'src/assets/images/port-item4.png'
        },
        {
          title: '视频博主',
          category: '内容创作',
          image: 'src/assets/images/port-item3.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.works-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
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

.works-filter button {
  background: rgba(30, 41, 59, 0.7);
  color: #cbd5e1;
  border: 1px solid rgba(100, 116, 139, 0.2);
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.works-filter button:hover,
.works-filter button.active {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.3);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.work-item {
  height: 300px;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.work-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.work-item h3 {
  font-size: 1.5rem;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.work-item p {
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.view-btn {
  background: #38bdf8;
  color: white;
  padding: 8px 20px;
  border-radius: 30px;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: #0ea5e9;
}
</style>