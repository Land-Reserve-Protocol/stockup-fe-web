import "./App.css";
import TextInput from "./components/TextInput/textInput";

function App() {
  return (
    <>
      <TextInput
        type={"text"}
        placeholder={"Anything here"}
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        value={""}
        style={""}
        isDisabled={false}
        error={true}
        label={"Label"}
        errMessage={"error message"}
        labelStyle={"text-[24px] font-[700] text-[white]"}
      />
    </>
  );
}

export default App;
