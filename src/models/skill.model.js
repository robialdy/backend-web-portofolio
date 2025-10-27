import mongoose from "mongoose";
import * as Yup from "yup";

const Schema = mongoose.Schema;


export const skillDAO = Yup.object({
    name: Yup.string().required(),
    category: Yup.string().required(),
    icon: Yup.string(),
});

const SkillSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    category: {
        type: Schema.Types.String,
        required: true
    },
    icon: {
        type: Schema.Types.String,
        default: "skill.jpg"
    }
});

const SkillModel = mongoose.model("Skill", SkillSchema);

export default SkillModel;