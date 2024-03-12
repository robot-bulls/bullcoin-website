import React from 'react';
import toast from 'react-hot-toast';

const Tokenomics = () => {
  const copyText = () => {
    const textToCopy = document.getElementById('token').innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success("Text copied to clipboard")

      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  return (
    <div className='Tokenomics'>
      <h1 className='h1'>Tokenomics</h1>
      <div id='addr'>Contract Address</div>
      <div id='cont'>Contract Renounced</div>
      <p id='token'>0x695d38EB4e57E0f137e36df7c1f0f2635981246b</p>

      <button onClick={copyText}>Copy contact Address</button>

      <div style={{ margin: '20px 0' }}>
        <div className='text-xl' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div id='table' className='tableBorder'>
            <p>10%</p>
          </div>
          <div className='tableBorder'>
            <p>Designated for investors and creators</p>
          </div>
        </div>
        <div style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <p className='fs-1'>50%</p>
          </div>
          <div className='tableBorder'>
            <p>Allocated to the monetary pool</p>
          </div>
        </div>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <p>20%</p>
          </div>
          <div className='tableBorder'>
            <p>Dedicated to airdrops</p>
          </div>
        </div>
        <div className='' style={{ Width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

          <div className='tableBorder'>
            <p>20%</p>
          </div>
          <div className='tableBorder'>
            <p>Apportioned for compensatory purposes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;