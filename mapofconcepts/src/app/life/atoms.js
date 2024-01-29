const protonstyle = {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey', // A distinct color for bosons
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '10px',

}

export const proton = [
    {
        id: 'Proton',
        data: { label: 'Proton' },
        position: { x: 100, y: 180 },
        style: protonstyle
    },
];

export const neutron = [
  {
      id: 'Neutron',
        data: { label: 'Neutron' },
        position: { x: 160, y: 180 },
        style: protonstyle
  }
]
// export default proton;


const atomstyle = {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey', // A distinct color for bosons
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '10px',
  };
  
export const atom = [
    {
      id: 'Atom',
      data: { label: 'Atom' },
      position: { x: 200, y: 300 },
      style: atomstyle
    },
  ];

const element_style = {
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey', // A distinct color for bosons
    color: 'black',
    border: '2px solid darkblue',
    borderRadius: '10px',
};


export const elements = [
  {
        id: 'Elements',
        data: { label: 'Elements' },
        position: { x: 350, y: 200 },
        style: element_style
  }
]
const compound_style = {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige', // A distinct color for bosons
    color: 'black',
    border: '2px solid darkblue',
    borderRadius: '10px',

}

export const compounds = [
    {
        id: 'Compounds',
        data: { label: 'Compounds' },
        position: { x: 600, y: 305},
        style: compound_style
    },
];

export const molecule = [
  {
      id: 'Molecule',
      data: { label: 'Molecule' },
      position: { x: 600, y: 200 },
      style: compound_style
  }
]