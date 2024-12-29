// src/pages/ManageBeneficiariesPage.js
import React, { useState } from 'react';

const ManageBeneficiariesPage = () => {
  const [beneficiaries, setBeneficiaries] = useState(['John Doe', 'Jane Smith']);
  const [newBeneficiary, setNewBeneficiary] = useState('');

  const handleAddBeneficiary = () => {
    setBeneficiaries([...beneficiaries, newBeneficiary]);
    setNewBeneficiary('');
  };

  return (
    <div>
      <h2>Manage Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary, index) => (
          <li key={index}>{beneficiary}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newBeneficiary}
        onChange={(e) => setNewBeneficiary(e.target.value)}
      />
      <button onClick={handleAddBeneficiary}>Add Beneficiary</button>
    </div>
  );
};

export default ManageBeneficiariesPage;
