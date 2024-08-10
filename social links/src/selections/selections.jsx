import "./selections.css";
import SelectionItems from "../selectionItems/selectionItems";

function Selections() {
  return (
    <div id="selections">
      <SelectionItems SelectioName="Github"></SelectionItems>
      <SelectionItems SelectioName="Frontend Montor"></SelectionItems>
      <SelectionItems SelectioName="Linkedin"></SelectionItems>
      <SelectionItems SelectioName="Twitter"></SelectionItems>
      <SelectionItems SelectioName="Instagram"></SelectionItems>
    </div>
  );
}

export default Selections;
