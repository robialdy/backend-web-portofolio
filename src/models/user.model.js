import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  profilePicture: {
    type: Schema.Types.String,
    default: "user.jpg",
  },
  introduction: {
    type: Schema.Types.String,
    required: true,
  },
  aboutMe: {
    type: Schema.Types.String,
    required: true,
  },
  totalProject: {
    type: Schema.Types.Number,
    required: true,
  },
  yearsOfExperience: {
    type: Schema.Types.Number,
    required: true
  }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
