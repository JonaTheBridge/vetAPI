import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const { page, itemsPerPage } = req.query;

  const animals = await animalsService.getAll({ page, itemsPerPage });
  res.json(animals);
}

async function getPaginated(req, res) {
  const { page, itemsPerPage } = req.params;

  const animals = await animalsService.getPaginated({ page, itemsPerPage });
  res.json(animals);
}

export {
  getAll,
  getPaginated,
};
