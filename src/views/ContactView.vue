<template>
  <div class="container">
    <Sidebar />
    
    <div class="main-content">
      <h1 class="section-title">联系我</h1>
      
      <div class="contact-container">

        
        <div class="contact-info">
          <h2>联系方式</h2>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h3>邮箱</h3>
              <p>3265467896@qq.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <h3>电话</h3>
              <p>173****4831</p>
            </div>
          </div>
          
          <h3>Frequently Asked Questions</h3>
          <div class="accordion" id="accordionExample2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse1" aria-expanded="true"
                  aria-controls="accordion-collapse1">
                  What will you do in the future?
                </button>
              </h2>
              <div id="accordion-collapse1" class="accordion-collapse collapse show"
                aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                  考研→出国留学 or 工作→回家养老
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse2" aria-expanded="false"
                  aria-controls="accordion-collapse2">
                  What do you do when faced with difficulties?
                </button>
              </h2>
              <div id="accordion-collapse2" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                  允许一切发生。我不害怕困难，但是我害怕没有勇气面对困难。《指环王》告诉我”人类的赞歌就是勇气的赞歌“，我所遇一切皆是当下的自己命中注定会遇到的，包括困难也是，所以就”兵来将挡水来土掩“嘛，有什么好怕的，干就完了!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#accordion-collapse3" aria-expanded="false"
                  aria-controls="accordion-collapse3">
                  What do you think college taught you?
                </button>
              </h2>
              <div id="accordion-collapse3" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample2">
                <div class="accordion-body">
                  大学之道，在明明德，在亲民，在止于至善。
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
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里处理表单提交逻辑
      alert('消息已发送！');
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
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

.contact-container {
  display: flex;
  gap: 3rem;
}

.contact-form {
  flex: 1;
  background: rgba(30, 41, 59, 0.7);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 116, 139, 0.2);
}

.contact-form h2 {
  font-size: 1.8rem;
  color: #f8fafc;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #cbd5e1;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(100, 116, 139, 0.3);
  background: rgba(15, 23, 42, 0.5);
  color: #f8fafc;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #38bdf8;
}

.submit-btn {
  background: linear-gradient(90deg, #38bdf8, #0ea5e9);
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
}

.contact-info {
  flex: 1;
}

.contact-info h2 {
  font-size: 1.8rem;
  color: #f8fafc;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.info-item i {
  font-size: 1.8rem;
  color: #38bdf8;
  margin-top: 5px;
}

.info-item h3 {
  font-size: 1.2rem;
  color: #f8fafc;
  margin-bottom: 0.3rem;
}

.info-item p {
  color: #cbd5e1;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.7);
  color: #38bdf8;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #38bdf8;
  color: white;
  transform: translateY(-5px);
}

@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
  }
}
</style>