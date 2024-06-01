


let Searchbar = (props) => {
  let {setSearchBarText} = props;

  // console.log(0, setSearchBarText)
  let movies;




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