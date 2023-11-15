import Service from "../models/Service.js";
import User from "../models/User.js";

/* CREATE */
export const createService = async (req, res) => {
  try {
    const { userId, firstName, lastName, licensePlate } = req.body;
    const user = await User.findById(userId);
    const newService = new Service ({
      userId: user.id,
      stateId: user.stateId,
      firstName,
      lastName,
      licensePlate,
      lineItems: [],
      total,
    })
    await newService.save();

    const service = await Service.find();
    res.status(201).json(service);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

/* READ */
export const getFeedServices = async ( req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json(service);
  } catch(err) {
    res.status(404).json({ message: err.message });
  }
}

export const getUserServices = async (req, res) => {
  try {
    const { userId } = req.params;
    const service = await Service.find({ userId });
    res.status(200).json(service);
  } catch(err) {
    res.status(404).json({ message: err.message });
  }
}