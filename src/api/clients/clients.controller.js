import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  console.log(req.user);
  const clients = await clientsService.getAll();
  res.json(clients);
}

async function getByDocumentNumber(req, res) {
  const { number } = req.params; // const number = req.params.number;

  const requiredDocNumberLength = 9;
  if (number.length !== requiredDocNumberLength) {
    res.status(400);
    res.json({ msg: 'Error: document number length is different to 9' });
    return;
  }

  const client = await clientsService.getByDocumentNumber({ documentNumber: number });
  res.json(client);
}

async function post(req, res) {
  const createdClient = await clientsService.post({ newClient: req.body });
  res.json(createdClient);
}

async function getByFilter(req, res) {
  const { query } = req;
  const clients = await clientsService.getByFilter({ query });
  res.json(clients);
}

async function replace(req, res) {
  const { id } = req.params;
  const { newClient } = req.body;
  const replacedClient = await clientsService.replace({ id, newClient });
  res.json(replacedClient);
}

async function update(req, res) {
  const { id } = req.params;
  const { newFields } = req.body;
  const updatedClient = await clientsService.update({ id, newFields });
  res.json(updatedClient);
}

async function remove(req, res) {
  const { id } = req.params;
  const removedClient = await clientsService.remove({ id });
  res.json(removedClient);
}

export {
  getAll,
  getByDocumentNumber,
  getByFilter,
  post,
  replace,
  update,
  remove,
};
