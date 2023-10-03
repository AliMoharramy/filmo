export default function Header({ onhandleSetItem }) {
  return (
    <header>
      <div className="navbar">
        <p className="logo">FILMO</p>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={(e) => {
            if (e.target.value.length > 3) onhandleSetItem(e.target.value);
          }}
        />
      </div>
    </header>
  );
}
