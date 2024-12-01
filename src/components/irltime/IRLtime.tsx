import { useEffect, useState } from 'react';


function IRLtime() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='text-center' style={{position: 'absolute', top: '90vh', left: '50%', transform: 'translate(-50%, -50%)', height:'5em', alignContent:'center', width:'fit-content'}}>
      <span className="text-6xl">{value.toLocaleTimeString()}</span>
    </div>
  );
}

export default IRLtime