import mongoose from 'mongoose';

const scribeSchema = new mongoose.Schema({
  aadhaarNumber: {
    type: String,
    required: true,
    match: /^\d{4}-\d{4}-\d{4}$/
  },
  fullName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^\+91\s\d{10}$/
  },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    default: ''
  },
  state: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  highestQualification: {
    type: String,
    required: true
  },
  institute: {
    type: String,
    required: true
  },
  subjectsOfExpertise: {
    type: [String],
    required: true
  }
  ,role:{
    type : String ,
    
    required : true

  },
  password : {
    type : String,
    require : [true , "please provide password"]
  }
}, { timestamps: true });

export default mongoose.models.Scribe || mongoose.model('Scribe', scribeSchema);
