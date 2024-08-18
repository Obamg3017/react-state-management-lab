import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  

  const handleAddFighter = (addFighter) => {
    const newFightersArray = [...team, addFighter];
    if (money <= zombieFighters.price) {
      console.log("Not enough money you bozo");
    } else {
      setTeam(newFightersArray);
      setMoney(money - addFighter.price)
      setTotalStrength(totalStrength + addFighter.strength)
      setTotalAgility(totalAgility + addFighter.agility)
    }
  };

  const handleRemoveFighter = (removeFighter) =>{
    const updatedTeam = team.filter((team)=>{
      team.name !== removeFighter.name
    })
    setTeam(updatedTeam);
    setMoney(money + removeFighter.price)
    setTotalStrength(totalStrength - removeFighter.strength);
    setTotalAgility(totalAgility - removeFighter.agility);
  }

  const chooseTeam = team.length === 0 ? `Pick some team members!` : team.length;

  return (
    <div>
      <h1>Zombie Fighters </h1>
      <h2>THIS IS MY MONEY:{money}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>My Team: </h2>
      <h2>{chooseTeam}</h2>

      <h2>Fighters Listed Below: </h2>
      <ul>
        {zombieFighters.map((zombie, index) => {
          return (
            <li key={index}>
              Name:{zombie.name}
              Price:{zombie.price}
              Strength:{zombie.strength}
              Agility:{zombie.agility}
              Img: <img src={zombie.img} alt="" />
              <button onClick={() => handleAddFighter(zombie)}>
                Add Fighter
              </button>
              <button onClick={() => handleRemoveFighter(zombie)}>
                Remove Fighter
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
