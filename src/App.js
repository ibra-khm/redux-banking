import React from "react";
import Home from "./Home";
import { useSelector, useDispatch } from 'react-redux'
import Header from "./Header";
import { Flowbite } from "flowbite-react";
import Foot from "./Foot";
function App() {
  return (
    <Flowbite
            theme={{
                theme: {
                    alert: {
                        color: {
                            primary: 'bg-primary'
                        }
                    }
                }
            }}
        >
    <div className="App min-h-screen dark:bg-darker">
      <Header/>
      <Home />
      <Foot/>
    </div>
    </Flowbite>
  );
}

export default App;
