const nodeStyle = {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // Add your desired shade of green here
    color: 'white', // Assuming you want white text
    border: '2px solid darkgreen', // Add a border if you like
    borderRadius: '10px', // Rounded corners for the node
  };
  
  const leptons = [
    {
      id: 'L',
      type: 'group',
      label: 'Leptons',
      data: { label: null },
      position: { x: 350, y: 0 }, // Position below the Fermions group
      style: {
        width: 340,
        height: 150,
        backgroundColor: 'lightgreen', // Different background for the group container
      },
    },
    {
      id: 'e-',
      data: { label: 'Electron' },
      position: { x: 10, y: 10 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'mu-',
      data: { label: 'Muon' },
      position: { x: 120, y: 10 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'tau-',
      data: { label: 'Tau' },
      position: { x: 230, y: 10 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 've',
      data: { label: 'Electron Neutrino' },
      position: { x: 10, y: 90 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'v_mu',
      data: { label: 'Muon' },
      position: { x: 120, y: 90 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
    {
      id: 'v_tau',
      data: { label: 'Tau neutrino' },
      position: { x: 230, y: 90 },
      parentNode: 'L',
      extent: 'parent',
      style: nodeStyle
    },
  ];
  
  export default leptons;
  