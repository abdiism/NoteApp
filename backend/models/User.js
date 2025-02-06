import mongoose from "mongoose";
//aan sameeno schemas ka
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userBio: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userMobile: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.Model("User", userSchema);
export { userModel };
