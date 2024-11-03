<template>
  <div class="signin-container">
    <div class="logo-container">
      <img src="@/assets/naulogo.png" alt="Logo" class="logo">
    </div>
    <form @submit.prevent="handleSubmit" class="signin-form">
      <h1>Log In</h1>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-input">
          <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" required>
          <button type="button" @click="showPassword = !showPassword" class="toggle-password">
            <EyeIcon v-if="showPassword" />
            <EyeOffIcon v-else />
          </button>
        </div>
      </div>

      <button type="submit" class="submit-button">Log In</button>
      <br><br>
      <div class="additional-links">
        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
        <p><router-link to="/forgotpassword">Forgot Password?</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>import axios from 'axios';
import { } from 'vue-router';

export default {
  name: 'LoginUser',
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      showPassword: false
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.success) {
          alert('Login successful!');
          // Redirect based on department
            this.$router.push('/dashboard');
        } else {
          alert('Invalid login credentials.');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
/*import axios from "axios";
import { auth } from "@/firebase"; // Firebase auth import

export default {
  name: "LoginUser",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      showPassword: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Call backend login API
        const response = await axios.post("http://localhost:3000/api/login", this.form);

        // Get custom token from response
        const token = response.data.token;

        // Sign in with Firebase custom token
        await auth.signInWithCustomToken(token);
        console.log("Login successful");

        // Redirect user or show success message
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  }
};*/
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.signin-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 100px; /* Adjust logo size as needed */
}

.signin-form {
  background-color: rgba(249, 249, 249, 0.9);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: left;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  text-align: left;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #062654;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #f58e08;
}

.additional-links {
  text-align: center;
  margin-top: 15px;
}

.additional-links p {
  margin: 5px 0;
  color: #333;
}

.additional-links a {
  color: #062654;
  font-weight: bold;
  text-decoration: none;
}

.additional-links a:hover {
  color: #f58e08;
}
</style>
