import { useState, useEffect } from 'react';
import "./App.css";

function CityList() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/cities').then((r) => {
      setData(r);
      setLoading(false);
    })
  }, []);
  if (loading) return <div>Loading...</div>;
  
  return (
    <ul>
      {data.map(rec => <li>{rec.name}</li>)}
    </ul>
  );
}


export default function CityList2() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/cities').then((r) => {
      setData(r);
      setLoading(false);
    })
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {data.map(rec => <li>{rec.name}</li>)}
    </ul>
  );
}



export default function CityList1({displayCount}) {
  const data = [
    {id: 1, name: "Chicago"},
    {id: 2, name: "New York City"},
    {id: 3, name: "Miami"},
    {id: 4, name: "Houston"},
    {id: 5, name: "Phoenix"},
    {id: 6, name: "San Jose"},
  ]
  return (
    <ul>
      {data
        .slice(0, displayCount)
        .map(rec => <li key={rec.id}>{rec.name}</li>)}
    </ul>
  );
}
