import UserInput from "./UserInput";

export default function Calculator(getAllInputs) {

  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput label="INITIAL INVESTMENT" id="initial-investment" onChange={() => getAllInputs('initial-investment', value)} />
        <UserInput label="annual investment" id="annual-investment" />
      </div>
      <div className="input-group">
        <UserInput label="expected return" id="expected-return" />
        <UserInput label="duration" id="duration" />
      </div>
    </div>
  );
}
