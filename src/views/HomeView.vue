<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">专业技能</h1>
      
      <div class="skills-container">
        <SkillCard 
          number="01"
          title="编程能力"
          description="会Python、Java等多种编程语言，实现过目标检测、关键词抽取等多种代码。"
        />
        
        <SkillCard 
          number="02"
          title="网页设计"
          description="会dw、会制作网页和微信小程序，有设计过关于跳绳的小程序，有自己的个人博客。"
        />
        
        <SkillCard 
          number="03"
          title="视频剪辑"
          description="具备专业的摄影技巧和视频剪辑能力，熟练使用剪映等工具。拥有自己的视频账号，创作高质量内容，擅长视觉叙事和特效制作。"
        />
      </div>
      
      <router-link to="/works" class="work-btn">
        VIEW ALL WORK <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import SkillCard from '@/components/SkillCard.vue'

export default {
  components: {
    Sidebar,
    SkillCard
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