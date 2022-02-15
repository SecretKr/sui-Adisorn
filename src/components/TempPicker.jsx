import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

function TempPicker({db, updateTemp}) {
  const [setTemp, setSetTemp] = useState(0)

  useEffect(() => {
    onValue(ref(db, 'setTemp'), (snapshot) => {
      setSetTemp(snapshot.val())
    })
  }, [db]);

  async function handleChange(event) {
    updateTemp(event.target.value)
  }

  return (
    <div className="setting">
      <p>Set Temperature</p>
      <input type="number" className="clock__label" min="0" max="99" onChange={handleChange} placeholder={setTemp}/>
      <span className="suffix">°C</span>
    </div>
  );
}

export default TempPicker;
