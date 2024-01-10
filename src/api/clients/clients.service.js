import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const clients = await clientsRepository.getAll();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({ documentNumber });
  return client;
}

async function getByFilter({ query }) {
  const clients = await clientsRepository.getByFilter({ query });
  return clients;
}

async function post({ newClient }) {
  const createdClient = await clientsRepository.post({ newClient });
  return createdClient;
}

async function replace({ id, newClient }) {
  const replacedClient = await clientsRepository.replace({ id, newClient });
  return replacedClient;
}

async function update({ id, newFields }) {
  const updatedClient = await clientsRepository.update({ id, newFields });
  return updatedClient;
}

async function remove({ id }) {
  const removedClient = await clientsRepository.remove({ id });
  return removedClient;
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
