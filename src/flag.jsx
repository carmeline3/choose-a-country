function Flag({code}) {

  if (code==="") {
    return null;
  }

  return (
    <div>
      <img
        src={`https://flagcdn.com/w320/${code}.png`}
        alt="Country Flag"
      />
    </div>
  );
}

export default Flag;