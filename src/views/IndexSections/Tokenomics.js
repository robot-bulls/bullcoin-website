import React from 'react';

const Tokenomics = () => {
  const copyText = () => {
    const textToCopy = document.querySelector('p3').innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        prompt('Text copied to clipboard:', textToCopy);
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  return (
    <div className='Tokenomics'>
      <h1>Tokenomics</h1>
      <h2>Contract Address</h2>
      <p>Contract Renounced</p>
      <p3>0x695d38EB4e57E0f137e36df7c1f0f2635981246b</p3><br />
      <button onClick={copyText}>Copy contact Address</button>

      <div style={{ margin: '20px 0' }}>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <h1>10%</h1>
          </div>
          <div className='tableBorder'>
            <h1>Designated for investors and creators</h1>
          </div>
        </div>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <h1>50%</h1>
          </div>
          <div className='tableBorder'>
            <h1>Allocated to the monetary pool</h1>
          </div>
        </div>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <h1>20%</h1>
          </div>
          <div className='tableBorder'>
            <h1>Dedicated to airdrops</h1>
          </div>
        </div>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <h1>20%</h1>
          </div>
          <div className='tableBorder'>
            <h1>Apportioned for compensatory purposes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;