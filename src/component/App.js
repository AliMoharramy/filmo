import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import MoviesList from "./MoviesList";
import FavDetails from "./FavDetails";

export default function App() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedID, setSelectedID] = useState("");
  const [isClose, setIsClose] = useState(true);

  if (isClose === false) {
  }

  function handleSelectedMovie(id) {
    setSelectedID(id);
    setIsClose(false);
  }

  function handleSetItem(value) {
    setSearchItem(value);
  }

  return (
    <>
      <Header onhandleSetItem={handleSetItem} />
      <Main>
        <MoviesList
          isClose={isClose}
          onhandleSelectedMovie={handleSelectedMovie}
          searchItem={searchItem}
        />
        <FavDetails
          selectedID={selectedID}
          isClose={isClose}
          setIsClose={setIsClose}
        />
      </Main>
    </>
  );
}
