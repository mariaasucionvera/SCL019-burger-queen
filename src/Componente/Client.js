import React from "react";

function Client() {
  return (
    <form>
      <label>Nombre del cliente</label>
      <input></input>

      <label>Seleccione una mesa </label>
      <select>
        <option>Mesa 1 </option>
        <option>Mesa 2 </option>
        <option>Mesa 3 </option>
        <option>Mesa 4 </option>
        <option>Mesa 5 </option>
      </select>
    </form>
  );
}

export { Client };
