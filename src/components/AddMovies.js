let AddMovies = (props) => {
  let {setInputBarText, handleAddMovies} = props;

  return (
    <div>
      <input
        onChange={(e) => setInputBarText(e.target.value)}
      ></input>
      <button
        onClick={() => handleAddMovies()}
      >Add</button>
    </div>
  )
}

export default AddMovies;