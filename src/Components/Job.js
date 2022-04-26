const Job = (props) => {
  return (
    <div className={`job ${props.borderColor}`}>
      <p>{props.title}</p>
      <p>{props.contractType}</p>
      <p>{props.country}</p>
      <p>{props.city}</p>
    </div>
  );
};

export default Job;
