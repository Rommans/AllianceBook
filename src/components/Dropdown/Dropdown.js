const Dropdown = (props) => {
  const { setFilterParam } = props;

  return (
    <div>
      <select
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>  
        <option value="n/a">Robot</option>
        <option value="hermaphrodite">Hermaphrodite</option>
      </select>
    </div>
  );
};

export default Dropdown;
