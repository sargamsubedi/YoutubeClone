
function calculateUplodeDate(uploadDate)
{

    const today = new Date();
    const videoDate = new Date(uploadDate);

    if(today.getFullYear()- videoDate.getFullYear())
    {
        return  `${today.getFullYear()- videoDate.getFullYear()} year`;
    }

    if(today.getMonth()- videoDate.getMonth())
    {
        return  `${today.getMonth()- videoDate.getMonth()} month`;
    }

  const days = Math.floor( (today.getTime() - videoDate.getTime()) /(1000 * 60 * 60 * 24));

  return `${days} ${days === 1 ? "day" : "days"}`;


}


export default calculateUplodeDate;