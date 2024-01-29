const organic_style = {
    width: 100,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple', // A distinct color for bosons
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '10px',

}

export const amino_acids = [
    {
        id: 'Amino_acid',
        data: { label: 'Amino Acids' },
        position: { x: 750, y: 400},
        style: organic_style
    },
];

export const protein = [
    {
        id: 'protein',
        data: { label: 'Proteins' },
        position: { x: 900, y: 400},
        style: organic_style
    },
];

export const fatty_acids = [
    {
        id: 'fatty_acid',
        data: { label: 'Fatty Acids' },
        position: { x: 750, y: 460},
        style: organic_style
    },
];

export const lipids = [
    {
        id: 'lipids',
        data: { label: 'Lipids' },
        position: { x: 900, y: 460},
        style: organic_style
    },
];

export const sugar_residues = [
    {
        id: 'sugar_residues',
        data: { label: 'Sugar residues' },
        position: { x: 750, y: 520},
        style: organic_style
    },
];

export const glycerol = [
    {
        id: 'glycerol',
        data: { label: 'glycerol' },
        position: { x: 750, y: 520},
        style: organic_style
    },
];

export const mono_saccharides = [
    {
        id: 'mono_saccharides',
        data: { label: 'mono-saccharides' },
        position: { x: 900, y: 520},
        style: organic_style
    },
];

export const carbohydrates = [
    {
        id: 'carboyhydrates',
        data: { label: 'Carbohydrates' },
        position: { x: 1050, y: 520},
        style: organic_style
    },
];

export const nucleotides = [
    {
        id: 'nucleotides',
        data: { label: 'Nucleotides' },
        position: { x: 1050, y: 600},
        style: organic_style
    },
];

export const organic_compound = [...amino_acids, ...protein, ...fatty_acids, ...lipids, ...mono_saccharides, ...sugar_residues, ...glycerol, ...carbohydrates, ...nucleotides ]