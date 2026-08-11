
function calculateViews(view)
{
let views = view+""; // convert number to string
    const length = views.length;

    if(length>9) //billion
    {
        let value = views.slice(0,length-9);
        return `${value}B`;
    }
    else if(length>6)//million
    {
        let value = views.slice(0,length-6);
        return `${value}M`;

    }
    else if(length>3) //thousand
    {
        let value = views.slice(0,length-3);

        return `${value}K`;
    }
    else{
        return views;
    }
}

export default calculateViews;