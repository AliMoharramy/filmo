import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import MoviesList from "./MoviesList";
import FavDetails from "./FavDetails";

export default function App() {
  const [searchItem, setSearchItem] = useState("inception");
  const [selectedID, setSelectedID] = useState("");

  function handleSelectedMovie(id) {
    setSelectedID(id);
  }

  function handleSetItem(value) {
    setSearchItem(value);
  }

  return (
    <>
      <Header onhandleSetItem={handleSetItem} />
      <Main>
        <MoviesList
          onhandleSelectedMovie={handleSelectedMovie}
          searchItem={searchItem}
        />
        <FavDetails selectedID={selectedID} />
      </Main>
    </>
  );
}
