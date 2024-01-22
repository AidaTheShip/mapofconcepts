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
        position: { x: 35, y: 180 },
        style: protonstyle
    },
];

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
      position: { x: 350, y: 300 },
      style: atomstyle
    },
  ];
  
