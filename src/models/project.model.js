import mongoose from "mongoose";
import * as Yup from "yup";

const Schema = mongoose.Schema;

export const projectDAO = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  image: Yup.string(),
  technologies: Yup.array()
    .of(Yup.string().required("Each technology must be a string"))
    .min(1, "At least one technology is required")
    .required("Technologies are required"),
  link: Yup.string(),
  onShow: Yup.boolean(),
});

const ProjectSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  image: {
    type: Schema.Types.String,
    default: "skill.jpg",
  },
  technologies: {
    type: [Schema.Types.String],
    required: true,
  },
  link: {
    type: Schema.Types.String,
  },
  onShow: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;
