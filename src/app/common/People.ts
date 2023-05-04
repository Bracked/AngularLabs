interface Person {
  id: string,
  name: string,
  type: number,

}

// <span *ngSwitchCase="0">Position: Regional Manager</span>
// <span *ngSwitchCase="1">Position: Assistant Regional Manager</span>
// <span *ngSwitchCase="2">Position: Sales Representative</span>
// <span *ngSwitchCase="3">Position: Office Administrator</span>

const PersonType = [
  {
    id: 0,
    name: "Regional Manager",
  },
  {
    id: 1,
    name: "Assistant Regional Manager",
  },
  {
    id: 2,
    name: "Sales Representative",
  },
  {
    id: 3,
    name: "Office Administrator",
  },

]

export { Person, PersonType }
