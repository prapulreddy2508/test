import React from "react";
import Register from "../components/Register";
import RegisterAddTeam from "../components/RegisterAddTeam";
import RegisterPage from "../components/RegisterPage";
import BankDetails from "../components/BankDetails";

function register() {
  const [stepper, setStepper] = React.useState(2);
  

  const handleStepper = (num) => {
    setStepper(num);
  };

  return (
    <div>
      {stepper == 1 ? <RegisterPage handleStepper={handleStepper} /> : null}
      
      {stepper == 2 ? <RegisterAddTeam handleStepper={handleStepper} /> : null}
      {stepper == 3 ? <BankDetails handleStepper={handleStepper} /> : null}
    </div>
  );
}

export default register;
