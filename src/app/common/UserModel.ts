interface User {
  id: number,
  name: string | null,
  lastName: string | null,
  type: string | null,
  email: string | null,
  password: string | null
  subjects: Array<string>,
  description: string | null,
  sex: string | null,
  phone: string | null,
}

interface UserTable {
  id: number | null,
  name: string | null,
  lastName: string | null,
  type: string | null,
  email: string | null,
  gender: string | null,
  phone: string | null,

  // actions: UserTableRowAction[]

}

interface UserTableRowAction {
  name: string | null,
  onClick: (id: number) => void
}

const UserTypes = ['admin', 'regular', 'anonymous']

const UserSexTypes = ['MALE', 'FEMALE']
const DefaultUser: User = {
  id: -1,
  name: '',
  lastName: '',
  type: UserTypes[2],
  email: '',
  password: '',
  subjects: [],
  description: '',
  sex: UserSexTypes[0],
  phone: '',
};

export {User, UserTable, UserTypes, UserSexTypes, DefaultUser}

