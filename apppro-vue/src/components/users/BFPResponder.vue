<template>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="logo.png" alt="NauHenyo Logo" />
        <h1>BFP Responder</h1>
      </div>
      <nav>
        <ul>
          <li><router-link to="/bfp-dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
          <li><router-link to="/report-incident"><i class="fas fa-exclamation-circle"></i> Report Incident</router-link></li>
          <li><router-link to="/my-reports"><i class="fas fa-folder"></i> My Reports</router-link></li>
          <li><router-link to="/map"><i class="fas fa-map-marker-alt"></i> Map</router-link></li>
          <li><router-link to="/messages"><i class="fas fa-envelope"></i> Message</router-link></li>
          <li><router-link to="/profile"><i class="fas fa-user"></i> Profile</router-link></li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="dashboard">
      <router-view></router-view> <!-- Displays the component for the active route -->
    </main>
  </div>
</template>

<script>
export default {
  name: "BFPResponder",
};
</script>

<style scoped>
/* Container with Sidebar and Main Content */
.container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  padding: 20px;
  position: fixed;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo img {
  width: 80px;
  margin-bottom: 10px;
}

.logo h1 {
  font-size: 1.5em;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 20px 0;
}

.sidebar nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}

.sidebar nav ul li a i {
  margin-right: 10px;
}

.sidebar nav ul li a:hover {
  color: #3498db;
}

/* Main Content Styling */
.dashboard {
  margin-left: 270px;
  padding: 20px;
  width: calc(100% - 270px);
  font-family: 'Arial', sans-serif;
  color: #2c3e50;
}
</style>
