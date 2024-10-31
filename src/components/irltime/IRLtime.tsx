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
    <div className='text-center' style={{position: 'absolute', bottom: '5%', right: '50%', transform: 'translateX(50%)'}}>
      <span className="text-6xl">{value.toLocaleTimeString()}</span>
    </div>
  );
}

export default IRLtime