import { useState } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Hearts } from 'svg-loaders-react';

function App() {
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [loading, setLoading] = useState(false);
  const [lovePercentage, setLovePercentage] = useState([]);

  const calculateLove = () => {
    const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${maleName}&sname=${femaleName}`;
    setLoading(true);
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': 'bfbf9b8c20msh2cf4a5a7b0d2059p1a0473jsn4c104983d2f6',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setLovePercentage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#ffd4a3]">
      <div className="flex justify-center items-center w-full h-screen flex-col">
        <h1 className="text-[#ff4aa8] text-[56px]">love calculator</h1>

        <div className="flex gap-8">
          <input
            type="text"
            placeholder="Male Name"
            value={maleName}
            onChange={(e) => setMaleName(e.target.value)}
            className="w-48 rounded p-2"
          />
          <input
            type="text"
            placeholder="Female Name"
            value={femaleName}
            onChange={(e) => setFemaleName(e.target.value)}
            className="w-48 rounded p-2"
          />
        </div>
        <BsFillSuitHeartFill
          className="my-6 text-[#fb6767] text-[52px]"
          onClick={calculateLove}
        />

        {loading ? (
          <Hearts />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h3>{lovePercentage.percentage}</h3>
            <h3>{lovePercentage.result}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
