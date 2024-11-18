const SelectCategory = ({ filter }) => {
  return (
    <select
      onChange={(event) => {
        filter(event.target.value);
      }}
      className="form-select"
      aria-label="Default select example"
    >
      <option value="">Select Category:</option>
      <option value="Romance">Romance</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Horror">Horror</option>
    </select>
  );
};

export default SelectCategory;
