import clientModel from './clients.model.js';

async function getAll() {
  const clients = await clientModel.find({}).lean();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientModel.findOne({ 'document.number': documentNumber }).lean();
  return client;
}

async function getByFilter({ query }) {
  const clients = await clientModel.find({ ...query });
  return clients;
}

async function post({ newClient }) {
  const createdClient = await clientModel.create(newClient);
  return createdClient;
}

async function replace({ id, newClient }) {
  const createdClient = await clientModel.findOneAndReplace({ _id: id }, newClient);
  return createdClient;
}

async function update({ id, newFields }) {
  const createdClient = await clientModel.findByIdAndUpdate({ _id: id }, newFields);
  return createdClient;
}

async function remove({ id }) {
  const updatedClient = await clientModel.findByIdAndDelete(id);
  return updatedClient;
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
