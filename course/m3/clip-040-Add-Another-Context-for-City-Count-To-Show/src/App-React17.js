import "./App.css";

function CityList({ displayCount }) {
  const data = [
    { id: 1, name: "Chicago" },
    { id: 2, name: "New York City" },
    { id: 3, name: "Miami" },
    { id: 4, name: "Houston" },
    { id: 5, name: "Phoenix" },
    { id: 6, name: "San Jose" },
  ];
  return (
    <ul>
      {data.slice(0, displayCount).map((rec) => (
        <li key={id}>{rec.name}</li>
      ))}
    </ul>
  );
}
