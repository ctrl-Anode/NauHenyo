<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-container">
        <img class="logo" :src="require('@/assets/naulogo.png')" alt="Logo" />
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder=" "
          />
          <label for="username">Username</label>
        </div>

        <div class="form-group">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
            placeholder=" "
          />
          <label for="password">Password</label>
          <span class="toggle-password" @click="togglePassword">
            {{ showPassword ? 'Hide' : '' }}
          </span>
        </div>

        <div class="form-group">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder=" "
          />
          <label for="confirmPassword">Confirm Password</label>
          <span class="toggle-password" @click="toggleConfirmPassword">
            {{ showConfirmPassword ? 'Hide' : '' }}
          </span>
        </div>

        <div class="form-group">
  <input
    type="text"
    id="otp"
    v-model="otp"
    required
    placeholder=" "
  />
  <label for="otp">OTP</label>
  <button type="button" class="send-otp-button" @click="sendOtp">Send OTP</button>
</div>

<button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      otp: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Login attempt with:', {
        username: this.username,
        password: this.password,
        otp: this.otp,
      });
      // Implement login logic here
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    sendOtp() {
      // Implement OTP sending logic here
      console.log('OTP sent to:', this.username);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #3498db, #e67e22);
}

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 550px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.logo-container {
  margin-bottom: 3rem;
}

.logo {
  width: 120px;
  height: auto;
}

.login-form {
  width: 100%;
}

.form-group {
  position: relative;
  margin-bottom: 2rem;
}

input {
  width: 90%;
  padding: 0.75rem;
  margin: 0 auto;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}
</style>
