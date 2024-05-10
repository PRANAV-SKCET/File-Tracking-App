import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';

const OfficeWorking = () => {
  // const [applicationNumber, setApplicationNumber] = useState('');
  // const [barcodeGenerated, setBarcodeGenerated] = useState(false);
  // const [error, setError] = useState('');

  // const generateBarcode = (e) => {
  //   e.preventDefault();
    
  //   if (!applicationNumber.trim()) {
  //     setError('Please enter an application number.');
  //     return;
  //   }

  //   try {
  //     JsBarcode("#barcode", applicationNumber, {
  //       format: "CODE128",
  //       displayValue: true 
  //     });
      
  //     setBarcodeGenerated(true);
  //     setError('');
  //   } catch (error) {
  //     setError('Error generating barcode. Please try again.');
  //     console.error('Barcode generation error:', error);
  //   }
  // };

  return (
    // <div>
    //   <h1>Barcode Generator</h1>
    //   <form onSubmit={generateBarcode}>
    //     <label>
    //       Application Number:
    //       <input 
    //         type="text" 
    //         value={applicationNumber} 
    //         onChange={(e) => setApplicationNumber(e.target.value)} 
    //       />
    //     </label>
    //     <button type="submit">Generate Barcode</button>
    //     {error && <p style={{ color: 'red' }}>{error}</p>}
    //   </form>
    //   <div id="barcode"></div>
    //   {barcodeGenerated && <p>Barcode generated successfully!</p>}
    // </div>

    <h1>OfficeWorking</h1>
  );
};

export default OfficeWorking;
