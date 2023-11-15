import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    stateId: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    licensePlate: {
      type: String,
      required: true
    },
    total: {
      type: String
    },
    lineItems: {
      type: Array,
      default: [],
    },
  }, {timestamps: true}
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;