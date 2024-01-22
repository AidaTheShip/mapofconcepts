const bosonNodeStyle = {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue', // A distinct color for bosons
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '10px',
  };
  
  const bosons = [
    {
      id: 'B',
      type: 'group',
      label: 'Bosons',
      data: { label: null },
      position: { x: 700, y: 0 }, // Positioned next to the fermions and leptons
      style: {
        width: 230,
        height: 150,
        backgroundColor: 'lightblue', // A lighter background for the group container
      },
    },
    {
      id: 'g',
      data: { label: 'Gluon' },
      position: { x: 10, y: 10 },
      parentNode: 'B',
      extent: 'parent',
      style: bosonNodeStyle
    },
    {
      id: 'photon',
      data: { label: 'Photon' },
      position: { x: 10, y: 90 },
      parentNode: 'B',
      extent: 'parent',
      style: bosonNodeStyle
    },
    {
      id: 'Z',
      data: { label: 'Z Boson' },
      position: { x: 120, y: 10 },
      parentNode: 'B',
      extent: 'parent',
      style: bosonNodeStyle
    },
    {
      id: 'W',
      data: { label: 'W Boson' },
      position: { x: 120, y: 90 },
      parentNode: 'B',
      extent: 'parent',
      style: bosonNodeStyle
    },
  ];
  
  export default bosons;  