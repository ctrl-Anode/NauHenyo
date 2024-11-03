const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccount.json');
const { auth } = require('./firebase');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

// Create Admin User
app.post('/api/admins', async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection('admins').add(data);
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send({ error: 'Failed to create admin' });
  }
});

// Read All Admin Users
app.get('/api/admins', async (req, res) => {
  try {
    const snapshot = await db.collection('admins').get();
    const admins = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(admins);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch admins' });
  }
});

// Update Admin User
app.put('/api/admins/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await db.collection('admins').doc(id).update(data);
    res.send({ message: 'Admin updated successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to update admin' });
  }
});

// Delete Admin User
app.delete('/api/admins/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection('admins').doc(id).delete();
    res.send({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete admin' });
  }
});

// Admin Login
app.post('/api/admins/login', async (req, res) => {
    try {
      const { department, admin_username, admin_password } = req.body;
      const adminsRef = db.collection('admins');
      const querySnapshot = await adminsRef
        .where('department', '==', department)
        .where('admin_username', '==', admin_username)
        .where('admin_password', '==', admin_password) // Assume plain text passwords; use hashing in production
        .get();
  
      if (!querySnapshot.empty) {
        res.send({ success: true, message: 'Login successful' });
      } else {
        res.send({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).send({ success: false, message: 'Login failed' });
    }
  });

  const bodyParser = require('body-parser');
  app.use(bodyParser.json());

  // Create User (Sign-Up)
app.post('/api/users', async (req, res) => {
    try {
      const newUser = req.body;
      const docRef = await db.collection('users').add(newUser);
      res.status(201).json({ id: docRef.id });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).send('Error adding user');
    }
  });
  
  // Read Users
  app.get('/api/users', async (req, res) => {
    try {
      const snapshot = await db.collection('users').get();
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).send('Error getting users');
    }
  });
  
  // Update User
  app.put('/api/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = req.body;
      await db.collection('users').doc(id).update(updatedUser);
      res.status(200).send('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Error updating user');
    }
  });
  
  // Delete User
  app.delete('/api/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.collection('users').doc(id).delete();
      res.status(200).send('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error deleting user');
    }
  });
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));