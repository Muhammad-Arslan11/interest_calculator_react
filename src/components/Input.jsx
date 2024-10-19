
import React from 'react';

function Input({value, onChange}) {




  return (
   <>
   <section id="user-input">
    <div className="input-group">
        <p>
        <label  htmlFor="">Initial Investment</label>
        <input type="text" value={value.initialInvestment} onChange={(e)=>onChange('initialInvestment', e.target.value)} required/>
        </p>

        <p>
        <label htmlFor="">Annual Investment</label>
        <input type="text" value={value.annualInvestment} onChange={(e)=>onChange('annualInvestment', e.target.value)} required/>
        </p>
    </div>

    <div className="input-group">
        <p>
        <label htmlFor="">Expected Returns</label>
        <input type="text" value={value.expectedReturn} onChange={(e)=>onChange('expetectedReturn', e.target.value)} required/>
        </p>

        <p>
        <label htmlFor="">Duration</label>
        <input type="text" value={value.duration} onChange={(e)=>onChange('duration', e.target.value)} required/>
        </p>
    </div>
    </section>
   </>
  )
}

export default Input