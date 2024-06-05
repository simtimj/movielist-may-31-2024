
let Searchbar = (props) => {
  let {setSearchBarText} = props;
  return (
    <div className="searchbar">
      <input
        onChange={(e) => {setSearchBarText(e.target.value)}}
      ></input>
      <button
        onClick={ () => console.log("whoa")}
      >
        Search
      </button>

    </div>
  )
}

export default Searchbar;