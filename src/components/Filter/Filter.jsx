function Filter({ filter, handelChangeFilter }) {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handelChangeFilter}
      />
    </>
  );
}

export default Filter;
