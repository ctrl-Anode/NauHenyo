<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">Nau-Henyo</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="/home"><i class="fas fa-home"></i> Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/incident"><i class="fas fa-exclamation-triangle"></i> Report Incident</a></li>
              <li class="nav-item"><a class="nav-link" href="/cases"><i class="fas fa-history"></i> My Reports</a></li>
              <li class="nav-item"><a class="nav-link active" href="/maps"><i class="fas fa-map-marked-alt"></i> Map</a></li>
              <li class="nav-item"><a class="nav-link" href="/statistic"><i class="fas fa-chart-bar"></i> Statistics</a></li>
              <li class="nav-item"><a class="nav-link" href="/message"><i class="fas fa-envelope"></i> Messages</a></li>
              <li class="nav-item"><a class="nav-link" href="/profile"><i class="fas fa-user"></i> Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <div class="container mt-4">
        <h1 class="mb-4">User Profile</h1>
  
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <img
                  src="/api/placeholder/150/150"
                  class="rounded-circle mb-3"
                  alt="Profile picture"
                />
                <h4>Juan Dela Cruz</h4>
                <p class="text-muted">Member since October 2023</p>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary"><i class="fas fa-edit"></i> Edit Profile</button>
                  <button class="btn btn-outline-secondary"><i class="fas fa-key"></i> Change Password</button>
                </div>
              </div>
            </div>
  
            <div class="card mt-4">
              <div class="card-header">
                <h5 class="card-title mb-0">Account Statistics</h5>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between mb-2">
                  <span>Total Reports:</span>
                  <span class="badge bg-primary">15</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Resolved Cases:</span>
                  <span class="badge bg-success">12</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Pending Cases:</span>
                  <span class="badge bg-warning">3</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#"><i class="fas fa-user"></i> Personal Info</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-bell"></i> Notifications</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-shield-alt"></i> Privacy</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullName" value="Juan Dela Cruz" />
                  </div>
                  <div class="row mb-3">
                    <div class="col">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" value="juan@example.com" />
                    </div>
                    <div class="col">
                      <label for="phone" class="form-label">Phone</label>
                      <input type="tel" class="form-control" id="phone" value="+63 912 345 6789" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" value="123 Main St, Barangay San Jose, Naujan" />
                  </div>
                  <div class="mb-3">
                    <label for="emergencyContact" class="form-label">Emergency Contact</label>
                    <input
                      type="text"
                      class="form-control"
                      id="emergencyContact"
                      value="Maria Dela Cruz - +63 912 987 6543"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="idType" class="form-label">ID Type</label>
                    <select class="form-select" id="idType">
                      <option>National ID</option>
                      <option>Driver's License</option>
                      <option>Passport</option>
                      <option>Voter's ID</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="idNumber" class="form-label">ID Number</label>
                    <input type="text" class="form-control" id="idNumber" value="1234-5678-9012" />
                  </div>
                  <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Save Changes</button>
                </form>
              </div>
            </div>
  
            <div class="card mt-4">
              <div class="card-header">
                <h5 class="card-title mb-0">Recent Activity</h5>
              </div>
              <div class="card-body">
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">Reported a fire incident</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Case #12345 - Barangay San Jose</p>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">Updated contact information</h6>
                      <small class="text-muted">1 week ago</small>
                    </div>
                    <p class="mb-1">Changed phone number</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
  };
  </script>
  
  <style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
  </style>
  