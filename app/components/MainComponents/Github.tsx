

const Github = () => {

  const startDate = new Date("03/01/2023").getTime();
  let currentDate = Date.now();
  const millisecondsBetween = startDate - currentDate;

  const numberOfDaysSince =  millisecondsBetween/ (1000 * 3600 * 24);


  return (
    <div>Github</div>
  )
}

export default Github;