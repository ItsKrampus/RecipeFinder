import { useLocation } from 'react-router-dom';

export default function Recipe() {
  let location  = useLocation();
  

  // Display recipe details
  return (
    <div>
            <h1>{console.log(location.state)}</h1>
    </div>
  );
}