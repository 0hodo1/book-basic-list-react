import { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <p className="app-title">Hodo Book List App</p>
      <p>There are currently {books.length} books.</p>
    </div>
  );
}

export default Navbar;
