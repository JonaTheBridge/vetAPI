import clientModel from './animals.model.js';

async function getAll({ skip, limit }) {
  const animals = await clientModel
    .find({})
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone.number -_id' })
    .lean();

  return animals;
}

async function getPaginated({ skip, limit }) {
  const animals = await clientModel
    .find({})
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone.number -_id' })
    .lean();

  return animals;
}

export {
  getAll,
  getPaginated,
};
