import mongoose from "mongoose";
import * as Yup from "yup";

const Schema = mongoose.Schema;

export const certificatesDAO = Yup.object({
  name: Yup.string().required(),
  publisher: Yup.string().required(),
  startDate: Yup.string().required(),
  endDate: Yup.string(),
  skor: Yup.number(),
});

const CertificatesSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  publisher: {
    type: Schema.Types.String,
    required: true,
  },
  startDate: {
    type: Schema.Types.String,
    required: true,
  },
  endDate: {
    type: Schema.Types.String,
  },
  skor: {
    type: Schema.Types.Number,
    default: 0,
  },
});

const CertificatesModel = mongoose.model("Certificates", CertificatesSchema);

export default CertificatesModel;
