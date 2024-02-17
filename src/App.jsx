import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState('');
  const [discount,setDiscount]=useState('');

  const [result,setResult]=useState('');
  const [result1,setResult1]=useState('');

  console.log(amount,discount);


  const calculate=(e)=>{
    const output=amount*discount/100
    console.log(output);
    setResult(output);
    const output1=amount-output;
    setResult1(output1);

}
const reset=(e)=>{
  setAmount(0);
  setDiscount(0);
  setResult(0);
  setResult1(0);
}
  return (
    <div className="App">
    
    <h1>Discount Calculator</h1>

        <div className='row' style={{backgroundColor:'antiquewhite'}}>

          <div className='col-6 ls1'>
            <div className='input'>
                  <TextField id="filled-basic"  value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
                  <br/>
                  <TextField id="filled-basic" value={discount||""} onChange={(e)=>setDiscount(e.target.value)} label="Discount%" variant="filled" />
            </div> 
            <Button variant="contained" onClick={(e)=>calculate(e)} style={{marginTop:'25px',marginLeft:'50px'}}>Calculate</Button>
            <Button variant="contained" onClick={(e)=>reset(e)} style={{marginTop:'25px',marginLeft:'60px'}}>Reset</Button>
          </div>
        <div className='col-6 ls2'>
          <h3>With original price:&#8377;{amount} and discount:{discount}%</h3>
          <p>Price After Discount:&#8377;{result1}</p>
          <p>You Saved:&#8377;{result}</p>

        </div>
      </div>  
      
    </div>
  );
}

export default App;
