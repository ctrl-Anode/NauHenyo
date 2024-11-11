<!-- components/users/BFPResponderDashboard.vue -->
<template>
    <div>
      <h2>BFP Responder Dashboard</h2>
      <p class="subtitle">Below are the fire-related incidents assigned to you:</p>
  
      <div v-if="fireIncidents.length" class="incident-list">
        <div v-for="incident in fireIncidents" :key="incident.id" class="incident-card">
          <div class="incident-header">
            <h3>{{ incident.title }}</h3>
            <span class="status" :class="incident.status.toLowerCase()">
              <i :class="getStatusIcon(incident.status)" class="status-icon"></i> {{ incident.status }}
            </span>
          </div>
          <p><strong>Location:</strong> {{ incident.location }}</p>
          <p><strong>Description:</strong> {{ incident.description }}</p>
  
          <!-- Update Status Form -->
          <div class="update-section">
            <h4>Update Incident Status</h4>
            <form @submit.prevent="updateIncidentStatus(incident.id)" class="update-form">
              <textarea v-model="incidentResponse" placeholder="Add response or assessment"></textarea>
              
              <label for="file" class="file-label">Upload Evidence (JPG, PNG, MP4):</label>
              <input type="file" @change="onFileChange" accept=".jpg, .png, .mp4" />
  
              <div class="status-actions">
                <select v-model="incidentStatus">
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
                <button type="submit" class="submit-button">Submit Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p v-else class="no-incidents">No incidents assigned to you at this time.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fireIncidents: [
          { id: 3, title: "Building Fire", location: "Residential Area", status: "Pending", description: "A fire broke out in a residential building." },
          { id: 4, title: "Grassfire near Highway", location: "Main Highway", status: "Pending", description: "Grassfire near the highway." }
        ],
        incidentResponse: '',
        incidentStatus: 'In Progress',
        evidenceFile: null
      };
    },
    methods: {
      onFileChange(event) {
        this.evidenceFile = event.target.files[0];
      },
      updateIncidentStatus(incidentId) {
        const updateData = {
          response: this.incidentResponse,
          status: this.incidentStatus,
          evidence: this.evidenceFile
        };
        console.log("Updating fire incident:", incidentId, updateData);
        alert("Fire incident updated successfully.");
        this.incidentResponse = '';
        this.incidentStatus = 'In Progress';
        this.evidenceFile = null;
      },
      getStatusIcon(status) {
        switch (status) {
          case 'Pending':
            return 'fas fa-exclamation-circle';
          case 'In Progress':
            return 'fas fa-spinner';
          case 'Resolved':
            return 'fas fa-check-circle';
          default:
            return '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles here for the dashboard content */
  </style>
  