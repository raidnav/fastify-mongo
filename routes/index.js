import { getCars, getSingleCars, addCar, updateCar, deleteCar } from '../controllers/carController';

const routes = [
   {
      method: 'GET',
      url: '/api/cars',
      handler: getCars
   },
   {
      method: 'GET',
      url: '/api/cars/:id',
      handler: getSingleCars
   },
   {
      method: 'POST',
      url: '/api/cars',
      handler: addCar
      // schema: documentation.addCarSchema
   },
   {
      method: 'PUT',
      url: '/api/cars/:id',
      handler: updateCar
   },
   {
      method: 'DELETE',
      url: '/api/cars/:id',
      handler: deleteCar
   }
];

export default routes;