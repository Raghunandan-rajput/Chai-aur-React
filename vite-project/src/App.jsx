import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("Value add", counter);
  };

  const removeValue = () => {
    console.log("Value add", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="main-container">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {/* <h2>counter value : {counter}</h2>
        <button onClick={addValue}>Add Value{counter}</button>
        <br />
  <button onClick={removeValue}>remove value {counter}</button>*/}
        <h1 className="bg-green-500  text-black p-4 rounded mb-4 mt-5">Chai aur Raghu</h1>
        <div class="relative h-[300px] w-[300px] rounded-md">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">Delba</h1>
            <p class="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Profile →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
