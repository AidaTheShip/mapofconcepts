"use client";
import React from 'react';
import ReactFlow, {MiniMap} from 'reactflow';
import particle_edges from './edges';
import 'reactflow/dist/style.css';
// Importing the nodes that we created in separate files to keep track of everything
import fermions from './standardmodel/fermions';
import leptons from './standardmodel/leptons';
import bosons from './standardmodel/bosons';
import { atom, elements, molecule, neutron, proton, compounds } from './atoms';
import { amino_acids, fatty_acids, lipids, protein, sugar_residues, glycerol, mono_saccharides, carbohydrates, nucleotides} from './compounds';
import { rna, dna } from './life';

const all_nodes = [...fermions, ...leptons, ...bosons, ...proton, ...neutron, ...atom, ...molecule, ...elements, 
  ...compounds, ...amino_acids, ...lipids, ...fatty_acids, ...protein, ...sugar_residues, ...glycerol, ...mono_saccharides, ...carbohydrates, 
...nucleotides, ...rna, ...dna];
// const all_edges = [{ id: 'e1-3', source: '1', target: '3', label: 'Up-Quark'},{ id: 'e2-3', source: '2', target:'3', label: 'Electrons'}];


export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <ReactFlow nodes={all_nodes} edges={particle_edges}>
        {/* <MiniMap /> */}
        </ReactFlow>
    </div>
  );
}
