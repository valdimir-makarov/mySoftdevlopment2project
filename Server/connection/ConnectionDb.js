// connectionDB.js
import mongoose from 'mongoose';

const connectionDB = async () => {
  try {
    const connectionString = 'mongodb+srv://nurfarhanbubun2010049:fUXzNleA9JTWpBQT@cluster0.7ijnpva.mongodb.net/march-4';
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected successfully');
  } catch (error) {
    console.error('Could not connect to the database:', error.message);
  }
};

export default connectionDB;
