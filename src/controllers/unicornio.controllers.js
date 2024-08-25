import { Unicornio } from "../models/unicornio.schema.js";

const message = {
  message: "Unicorn not found",
};

export const createUnicorn = async (req, res) => {
  try {
    const unicornio = Unicornio(req.body);
    const result = await unicornio.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const getUnicorns = async (req, res) => {
  try {
    const result = await Unicornio.find();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const getUnicorn = async (req, res) => {
  try {
    const { unicornId } = req.params;
    const result = await Unicornio.findById(unicornId);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(message);
  }
};

export const updateUnicorn = async (req, res) => {
  const { unicornId } = req.params;
  const newUnicorn = req.body;
  try {
    const result = await Unicornio.findByIdAndUpdate(unicornId, newUnicorn);
    res.json({ message: "Unicorn update" });
  } catch (error) {
    res.status(404).json(message);
    console.log(error.message);
  }
};

export const deleteUnicorn = async(req,res) =>{
    try{
        const {unicornId} = req.params

        const result = await Unicornio.findByIdAndDelete(unicornId)

        res.status(200).json({"message": "Unicorn deleted"})
    }catch(error){
        res.status(404).json(message)
        console.log(error.message);}
}