import { Schema, model } from 'mongoose';

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  secondSurname: {
    type: String,
  },
  document: {
    type: {
      type: String,
      default: 'dni',
      enum: ['dni', 'nie', 'passport'],
    },
    number: {
      type: String,
      maxLength: 9,
      minLength: 9,
      required: true,
    },
  },
  phone: {
    code: {
      type: String,
      maxLength: 4,
      minLength: 2,
    },
    number: {
      type: String,
      required: true,
    },
  },
  mail: {
    type: String,
    required: true,
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  address: {
    type: {
      type: String,
      default: 'street',
      enum: ['street', 'avenue', 'road'],
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    level: {
      type: String,
    },
    door: {
      type: String,
    },
    cp: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

const clientModel = model('Client', clientsSchema);
export default clientModel;
