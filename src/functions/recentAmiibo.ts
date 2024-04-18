// This is a simple function that helps calculate recent dates from today and a year ago, used to identify recent Amiibo figurines for 'New Releases' on the homepage.
// It is called in the 'filterRecentReleases' function.

// This function creates a new Date, calculates the date from a year ago today, grabs the day, month, handles conversion.
// If the date is >= the release date of the amiibo, it is a truthy value, otherwise false.
// Used to ensure 'recent released' amiibos are allocated properly on the homepage.
export default function calculateDateRecentAmiibo(amiiboDate) {
    return amiiboDate
        ? new Date(amiiboDate) >=
              new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate())
        : false;
}
