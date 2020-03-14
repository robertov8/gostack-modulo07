import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const techsSize = useMemo(() => techs.length, [techs]);

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');
    setTechs(JSON.parse(storageTechs));
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const handleAdd = useCallback(() => {
    console.log('handleAdd');

    setTechs([...techs, newTech]);
    setNewTech('');
  }, [techs, newTech]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techsSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
