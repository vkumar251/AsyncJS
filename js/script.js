function geoCodio()
{
    // get request to geocodio endpoint
    const geocode = 'https://api.geocod.io/v1.9/geocode?q=1109+N+Highland+St%2C+Arlington+VA&fields=zip4&api_key=69919131ea36ec1961fc399f3accea21eeecf1c';

    // HTTP success and failed requests
    const errorHandle = (response) => 
    {
        if (!response.ok) // failed requests - e.g. 401-404
        {
            return response.json()
                .then(err => 
                {
                    // throw error object if request fails
                    throw new Error(err.error?.message || "Request failed");
                });
        }
        else // successful requests - e.g. 200-300
        {
            return response.json();
        }
    }
    // success callback
    const successHandle = (data) => 
    {
        console.log(data);
    }
    // define function to run the fetch
    const createRequest = (url) => 
    {
        // send HTTP request
        return fetch(url)
            .then((response) => errorHandle(response)) // run errorHandle
            .then(successHandle) // print successful json
            .catch((error) => console.error(error.message)); // print error if anything throws
    }

    createRequest(geocode);
}
function bankHolidays()
{
    const holidays = 'https://www.gov.uk/bank-holidays.json';
    const errorHandle = (response) => 
    {
        if (response.ok) {return response.json();}
        else {console.error("Error: Request failed");}
    }
    const successHandle = (data) =>
    {
        console.log(data);
    }
    const createRequest = (url) => 
    {
        return fetch(url)
            .then((response) => errorHandle(response))
            .then(successHandle)
            .catch((error) => console.error(error.message));
    }

    createRequest(holidays);
}
function bankHolidaysArchive()
{
    // create function for fetching requests
    const createRequest = (url) => 
    {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error));
    }

    // fetch bank holidays
    const holidays = 'https://www.gov.uk/bank-holidays.json';
    createRequest(holidays);
}

bankHolidays();