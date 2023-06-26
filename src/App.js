import React, { useState } from "react";
import SignUp from "./signup";
import Login from "./login";
import "./global.css";

const App = () => {
  const [currentForm, setCurrentForm] = useState("signup");

  const handleFormSwitch = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <div className="App">
      

      <main className="App-main">
        
        {currentForm === "login" ? (
          <Login onFormSwitch={handleFormSwitch} />
        ) : (
          <SignUp onFormSwitch={handleFormSwitch} />
        )}
      </main>

    </div>
  );
};

export default App;



// import React, { useState } from "react";
// import SignUp from "./signup";
// import Login from "./login";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
      

//       <main className="App-main">
//         {/* Your main content goes here */}
//         <SignUp onFormSwitch={yourFormSwitchFunction} />
//       </main>

      
//     </div>
//   );
// };
// export default App;

