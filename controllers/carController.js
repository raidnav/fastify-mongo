import { boomify } from 'boom';
import Car, { find, findById, findByIdAndUpdate, findByIdAndRemove } from '../models/car';

export async function getCars(req, res) {
  try {
    const cars = await find();
    return cars;
  } catch (err) {
    throw boomify(err);
  }
}

export async function getSingleCars(req, res) {
  try {
    const id = req.params.id;
    const car = await findById(id);
  } catch (err) {
    throw boomify(err);
  }
}

export async function addCar(req, res) {
  try {
    const car = new Car(req.body);
    return car.save();
  } catch (err) {
    throw boomify(err);
  }
}

export async function updateCar(req, res) {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const update = await findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boomify(err);
  }
}

export async function deleteCar(req, res) {
  try {
    const id = req.params.id;
    const car = await findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boomify(err);
  }
}