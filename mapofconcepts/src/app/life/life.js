const dna_style = {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // A distinct color for bosons
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '10px',

}
export const rna = [
    {
        id: 'rna',
        data: { label: 'RNA' },
        position: { x: 1050, y: 660},
        style: dna_style
    },
];

export const dna = [
    {
        id: 'dna',
        data: { label: 'DNA' },
        position: { x: 1110, y: 660},
        style: dna_style
    },
];