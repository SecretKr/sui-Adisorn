import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import firebaseConfig from "../config";
import React, { useState, useEffect } from "react";

import TempPicker from "./TempPicker"

function App() {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const [tempNow, setTempNow] = useState(0)
  const [fan, setFan] = useState(0)

  useEffect(() => {
    onValue(ref(db, 'fan'), (snapshot) => {
      setFan(snapshot.val())
    })
    onValue(ref(db, 'tempNow'), (snapshot) => {
      setTempNow(snapshot.val())
    })
  }, [db]);

  async function updateTemp(tmp) {
    try{
      await set(ref(db, 'setTemp'), tmp)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="fs">
          <span className="label">Fan Speed</span>
          <span className="data">{fan}</span>
          <span className="suffix">%</span>
        </div>
        <div className="wt">
          <span className="label">Water Temperture</span>
          <span className="data">{tempNow}</span>
          <span className="suffix">°C</span>
        </div>
        <TempPicker db={db} updateTemp={updateTemp}/>
      </div>
    </div>
  );
}

export default App;
