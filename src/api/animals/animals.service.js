import * as animalsRepository from './animals.repository.js';

function getSkipAndLimit({ page, itemsPerPage }) {
  const skip = (page - 1) * itemsPerPage;
  const limit = itemsPerPage;
  return { skip, limit };
}

async function getAll({ page, itemsPerPage }) {
  const { skip, limit } = getSkipAndLimit({ page, itemsPerPage });
  const animals = await animalsRepository.getAll({ skip, limit });
  return animals;
}

async function getPaginated({ page, itemsPerPage }) {
  const { skip, limit } = getSkipAndLimit({ page, itemsPerPage });
  const animals = await animalsRepository.getPaginated({ skip, limit });
  return animals;
}

export {
  getAll,
  getPaginated,
};
