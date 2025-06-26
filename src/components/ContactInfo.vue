<template>
  <div class="contact-info">
    <p><i class="fas fa-envelope"></i> contact@3265467896@qq.com</p>
    <p><i class="fas fa-phone"></i> +86 173 **** 4831</p>
    <p><i class="fab fa-github"></i> github.com/pipxiu</p>
  </div>
</template>

<style scoped>
.contact-info {
  margin-top: auto;
  padding: 20px;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(100, 116, 139, 0.2);
}

.contact-info p {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.contact-info i {
  margin-right: 10px;
  color: #38bdf8;
  width: 20px;
  text-align: center;
}

.contact-info p:last-child {
  margin-bottom: 0;
}
</style>