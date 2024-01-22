"use client";
import React from 'react';
import ReactFlow, {MiniMap} from 'reactflow';
import nodes from './standardmodel/fermions';
import 'reactflow/dist/style.css';
// Importing the nodes that we created in separate files to keep track of everything
import fermions from './standardmodel/fermions';
import leptons from './standardmodel/leptons';
import bosons from './standardmodel/bosons';
import { atom } from './atoms';
import { proton } from './atoms';

const all_nodes = [...fermions, ...leptons, ...bosons, ...proton, ...atom];
// const all_edges = [{ id: 'e1-3', source: '1', target: '3', label: 'Up-Quark'},{ id: 'e2-3', source: '2', target:'3', label: 'Electrons'}];


export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'white' }}>
      <ReactFlow nodes={all_nodes}>
        {/* <MiniMap /> */}
        </ReactFlow>
    </div>
  );
}
