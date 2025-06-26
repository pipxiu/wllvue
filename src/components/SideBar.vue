<template>
  <div class="sidebar">
    <div class="profile">
      <h1>王玲珑 <span class="divider">/</span> 皮皮休</h1>
      <p class="subtitle">湖南师范大学 & 教育技术学</p>
    </div>
    
    <nav>
      <ul>
        <li>
          <router-link to="/" :class="{ active: $route.path === '/' }">
            <i class="fas fa-home"></i> Home
          </router-link>
        </li>
        <li>
          <router-link to="/intro" :class="{ active: $route.path === '/intro' }">
            <i class="fas fa-user"></i> Intro
          </router-link>
        </li>
        <li>
          <router-link to="/about" :class="{ active: $route.path === '/about' }">
            <i class="fas fa-user"></i> About
          </router-link>
        </li>
        <li>
          <router-link to="/works" :class="{ active: $route.path === '/works' }">
            <i class="fas fa-briefcase"></i> Works
          </router-link>
        </li>
        <li>
          <router-link to="/contact" :class="{ active: $route.path === '/contact' }">
            <i class="fas fa-envelope"></i> Contact
          </router-link>
        </li>
      </ul>
    </nav>
    
    <ContactInfo />
  </div>
</template>

<script>
import ContactInfo from './ContactInfo.vue'

export default {
  components: {
    ContactInfo
  }
}
</script>

<style scoped>
.sidebar {
  width: 320px;
  background: rgba(15, 23, 42, 0.8);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(100, 116, 139, 0.3);
  position: sticky;
  top: 0;
  height: 100vh;
}

.profile {
  text-align: center;
  margin-bottom: 2.5rem;
}

.profile h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #f8fafc;
}

.profile .divider {
  font-size: 1.5rem;
  color: #94a3b8;
  margin: 0 10px;
}

.profile .subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

nav ul {
  list-style: none;
  margin-top: 2rem;
}

nav ul li {
  margin-bottom: 1.2rem;
}

nav ul li a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 8px 15px;
  border-radius: 6px;
}

nav ul li a:hover, 
nav ul li a.router-link-active,
nav ul li a.active {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
}

nav ul li a i {
  margin-right: 12px;
  width: 20px;
  text-align: center;
}

@media (max-width: 900px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid rgba(100, 116, 139, 0.3);
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: 1.5rem;
  }
}
</style>