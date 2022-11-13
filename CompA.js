import React, { createContext, useState } from 'react';
import CompB from './CompB';



export default function CompA() {

    const CompA = () => {
        const [show, setShow] = useState(false);
        return (
          <>
            {show ? <CompB /> : null}
            <button onClick={() => setShow(!show)}>
              Click ME</button>
          </>
        );
      }
}