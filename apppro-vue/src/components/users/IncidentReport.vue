<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">Nau-Henyo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
        <h1 class="mb-4">Report an Incident</h1>
  
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <form @submit.prevent="submitReport">
                  <div class="mb-3">
                    <label for="incidentType" class="form-label">Incident Type</label>
                    <select class="form-select" v-model="form.incidentType" id="incidentType" required>
                      <option value="" disabled>Select incident type</option>
                      <option value="crime">Crime</option>
                      <option value="fire">Fire</option>
                      <option value="medical">Medical Emergency</option>
                      <option value="accident">Accident</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
  
                  <div class="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" class="form-control" v-model="form.location" id="location" placeholder="Enter incident location" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" v-model="form.description" id="description" rows="4" placeholder="Describe the incident in detail" required></textarea>
                  </div>
  
                  <div class="mb-3">
                    <label for="dateTime" class="form-label">Date and Time</label>
                    <input type="datetime-local" class="form-control" v-model="form.dateTime" id="dateTime" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="photos" class="form-label">Upload Photos (if any)</label>
                    <input type="file" class="form-control" id="photos" multiple @change="handleFileUpload">
                  </div>
  
                  <div class="mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" v-model="form.anonymous" id="anonymous">
                      <label class="form-check-label" for="anonymous">
                        Report anonymously
                      </label>
                    </div>
                  </div>
  
                  <button type="submit" class="btn btn-danger"><i class="fas fa-paper-plane"></i> Submit Report</button>
                </form>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header bg-info text-white">
                <h5 class="card-title mb-0"><i class="fas fa-info-circle"></i> Important Information</h5>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li><i class="fas fa-check text-success"></i> Your report will be immediately sent to relevant authorities</li>
                  <li><i class="fas fa-check text-success"></i> You can track the status of your report</li>
                  <li><i class="fas fa-check text-success"></i> All information is kept confidential</li>
                  <li><i class="fas fa-exclamation-triangle text-warning"></i> False reporting is punishable by law</li>
                </ul>
              </div>
            </div>
  
            <div class="card">
              <div class="card-header bg-success text-white">
                <h5 class="card-title mb-0"><i class="fas fa-phone"></i> Emergency Contacts</h5>
              </div>
              <div class="card-body">
                <p><strong>Police:</strong> 911</p>
                <p><strong>Fire Department:</strong> 912</p>
                <p><strong>Ambulance:</strong> 913</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReportIncident',
    data() {
      return {
        form: {
          incidentType: '',
          location: '',
          description: '',
          dateTime: '',
          photos: [],
          anonymous: false,
        },
      };
    },
    methods: {
      handleFileUpload(event) {
        this.form.photos = Array.from(event.target.files);
      },
      submitReport() {
        const formData = new FormData();
        formData.append('incidentType', this.form.incidentType);
        formData.append('location', this.form.location);
        formData.append('description', this.form.description);
        formData.append('dateTime', this.form.dateTime);
        formData.append('anonymous', this.form.anonymous);
  
        this.form.photos.forEach((file, index) => {
          formData.append(`photos[${index}]`, file);
        });
  
        fetch('/api/report-incident', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            console.log('Report submitted:', data);
            alert('Report submitted successfully.');
            // Reset form
            this.form = {
              incidentType: '',
              location: '',
              description: '',
              dateTime: '',
              photos: [],
              anonymous: false,
            };
          })
          .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the report.');
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 2rem;
  }
  </style>
  