
const nodeStyle = {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // Add your desired shade of green here
    color: 'white', // Assuming you want white text
    border: '2px solid darkred', // Add a border if you like
    borderRadius: '10px', // Rounded corners for the node
  };
  
  const fermions = [
    {
      id: 'A',
      type: 'group',
      label: 'Fermions',
      data: { label: null },
      position: { x: 0, y: 0 },
      style: {
        width: 340,
        height: 150,
        backgroundColor: '#FF6666', // Different background for the group container
      },
    },
    {
      id: 'U',
      type: 'zoom',
      data: { label: 'Up-Quark'},
      position: { x: 10, y: 10 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'D',
      data: { label: 'Down-Quark' },
      position: { x: 10, y: 90 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'C',
      data: { label: 'Charm-Quark' },
      position: { x: 120, y: 10 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'S',
      data: { label: 'Strange-Quark' },
      position: { x: 120, y: 90 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'T',
      data: { label: 'Top-Quark' },
      position: { x: 230, y: 10 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'Bottom',
      data: { label: 'Bottom-Quark' },
      position: { x: 230, y: 90 },
      parentNode: 'A',
      extent: 'parent',
      style: nodeStyle
    },
  ];
  
  export default fermions;
  