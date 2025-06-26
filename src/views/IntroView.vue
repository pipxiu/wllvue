<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">MBTI人格测试</h1>
      
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6">
          <h2 class="display-1 txt-fx slide-up">ENFP</h2>
          <h3 class="info-title">E：Enjoy everything阳光</h3>
          <h3 class="info-title">N：Nothing can defeat me无畏</h3>
          <h3 class="info-title">F：Faithful to everyone真诚</h3>
          <h3 class="info-title">P：Passion is my truth热烈</h3>
          <p>我很喜欢指环王里面甘道夫说的一句话：All we have to decide is what to do with the time that is given to us.我理解的意思就是说我们并不能决定世界带给我们什么，我们能决定的就是享受当下。</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-6">
          <div class="info-element py-4">
            <table class="table">
              <tbody>
                <tr>
                  <th>Age</th>
                  <td>20</td>
                </tr>
                <tr>
                  <th>Residence</th>
                  <td>Chinese</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Changsha, Hunan, China</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td><a href="#">3265467896@qq.com</a></td>
                </tr>
                <tr class="no-border-bottom">
                  <th>Phone</th>
                  <td>173****4831</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <router-link to="/works" class="work-btn">
        VIEW ALL WORK <i class="fas fa-arrow-right"></i>
      </router-link>
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
