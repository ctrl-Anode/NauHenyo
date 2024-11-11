<template>
    <div class="dashboard">
      <h2>NPS Responder Dashboard</h2>
      <p class="subtitle">Crime-related incidents assigned to you:</p>
      
      <div v-if="crimeIncidents.length" class="incident-list">
        <div v-for="incident in crimeIncidents" :key="incident.id" class="incident-card">
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
              <textarea v-model="incidentNotes" placeholder="Add notes or observations"></textarea>
              
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
        crimeIncidents: [
          { id: 1, title: "Robbery at Market", location: "Main Market", status: "Pending", description: "Reported robbery in the main market area." },
          { id: 2, title: "Assault in Park", location: "Central Park", status: "Pending", description: "Physical assault reported in the central park." }
        ],
        incidentNotes: '',
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
          notes: this.incidentNotes,
          status: this.incidentStatus,
          evidence: this.evidenceFile
        };
        console.log("Updating incident:", incidentId, updateData);
        alert("Incident updated successfully.");
        this.incidentNotes = '';
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
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  .dashboard {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #e0e0e0;
    text-align: center;
  }
  
  h2 {
    font-size: 2.8em;
    color: #00e6ff;
    margin-bottom: 5px;
    text-shadow: 0 0 10px rgba(0, 230, 255, 0.8), 0 0 20px rgba(0, 230, 255, 0.4);
  }
  
  .subtitle {
    font-size: 1.2em;
    color: #7f8c8d;
    margin-bottom: 30px;
  }
  
  .incident-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .incident-card {
    background: rgba(25, 25, 30, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s, box-shadow 0.4s;
  }
  
  .incident-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 15px rgba(0, 255, 170, 0.6);
  }
  
  .incident-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .incident-card h3 {
    color: #00e6ff;
    font-size: 1.8em;
    margin: 0;
    text-shadow: 0 0 8px rgba(0, 230, 255, 0.6);
  }
  
  .status {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1em;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  
  .status-icon {
    margin-right: 5px;
  }
  
  .status.pending {
    background-color: #f39c12;
    box-shadow: 0 0 8px rgba(243, 156, 18, 0.8);
  }
  
  .status.in-progress {
    background-color: #3498db;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.8);
  }
  
  .status.resolved {
    background-color: #2ecc71;
    box-shadow: 0 0 8px rgba(46, 204, 113, 0.8);
  }
  
  .update-section {
    margin-top: 15px;
  }
  
  .update-section h4 {
    font-size: 1.3em;
    color: #ecf0f1;
    margin-bottom: 10px;
  }
  
  .update-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  textarea {
    width: 100%;
    height: 100px;
    padding: 12px;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: 1em;
    background-color: rgba(0, 0, 0, 0.5);
    color: #e0e0e0;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  }
  
  .file-label {
    font-weight: bold;
    color: #bdc3c7;
  }
  
  input[type="file"] {
    margin-top: 5px;
  }
  
  .status-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  select {
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-size: 1em;
    background-color: #34495e;
    color: #ffffff;
  }
  
  .submit-button {
    background: linear-gradient(135deg, #ff00d4, #00e6ff);
    color: #ffffff;
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.4s, transform 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 0, 212, 0.5);
  }
  
  .submit-button:hover {
    background: linear-gradient(135deg, #00e6ff, #ff00d4);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 0, 212, 0.8);
  }
  
  .no-incidents {
    font-size: 1.3em;
    color: #bdc3c7;
    margin-top: 30px;
  }
  </style>
  