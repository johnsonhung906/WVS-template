import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: '財務部',
      city: '財務長',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Hello World',
    phone: '資工系'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: '公關部',
      city: '幹部',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Hello Cat',
    phone: '政治系'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: '活動部',
      city: '社員',
      street: '4894  Lakeland Park Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    email: 'alexa.richardson@devias.io',
    name: 'Hello Dog',
    phone: '財金系'
  },
];
