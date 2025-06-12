import { useState } from 'react';
import './App.css'
import Input from './components/Input';
import Button from './components/Button';
import { useEffect } from 'react';

function App() {
  const [assetCost, setAssetCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [processingFee, setProcessingFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [totalPayable, setTotaPayable] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  useEffect(() => {
    setLoanAmount(assetCost - downPayment);
  }, [assetCost, downPayment]);


  useEffect(() => {
    setDownPayment(assetCost - loanAmount);
  }, [loanAmount]);

  const calculateEMI = () => {
  const P = loanAmount;
  const annualRate = interest;
  const N = tenure;

  const R = annualRate / 12 / 100; // monthly interest rate
  let emi = 0;
  if (R === 0) {
    // If interest is 0%
    emi = P / N;
  } else {
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  }

  const totalProcessingFee = loanAmount * (processingFee / 100);
  const totalPayable = emi * N + totalProcessingFee;


  setTotaPayable(totalPayable.toFixed(2));
  setMonthlyEMI(emi.toFixed(2));

  console.log("EMI:", emi.toFixed(2));
  console.log("Total Payment:", totalPayable.toFixed(2));
  console.log("Processing Fee:", totalProcessingFee.toFixed(2));
};

  return (
    <>
      <h1>EMI Calculator</h1>

      <h3>Total Cost of Asset</h3>
      <Input type={'number'} data={assetCost} setData={setAssetCost} min={0}/>

      <h3>Interest Rate(in %)</h3>
      <Input type={'number'} data={interest} setData={setInterest} min={0} max={100}/>

      <h3>Processing Fee(in %)</h3>
      <Input type={'number'} data={processingFee} setData={setProcessingFee} min={0} max={100}/>

      <h3>Down Payment</h3>
      <h3>Total down Payment - {downPayment}</h3>
      <Input type={'range'} data={downPayment} setData={setDownPayment} min={0} max={assetCost}/>

      <h3>Loan per Month</h3>
      <h3>Total Loan Amount - {loanAmount}</h3>
      <Input type={'range'} data={loanAmount} setData={setLoanAmount} min={0} max={assetCost}/>

      <div>
        <h2>Total Payable - {totalPayable}</h2>
        <h2>Monthly EMI - {monthlyEMI}</h2>
      </div>

      <div>
        <Button title={12} onClick={setTenure}/>
        <Button title={24} onClick={setTenure}/>
        <Button title={36} onClick={setTenure}/>
        <Button title={48} onClick={setTenure}/>
        <Button title={60} onClick={setTenure}/>
      </div>

      <button onClick={calculateEMI}>Calculate EMI</button>
    </>
  )
}

export default App;