import mongoose from "mongoose";
import * as Yup from "yup";

const Schema = mongoose.Schema;

export const messageDAO = Yup.object({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string()
    .required()
    .min(50, "Message must be at least 50 character"),
});

const MessageSchema = new Schema({
  fullName: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  message: {
    type: Schema.Types.String,
    required: true,
  },
});

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
