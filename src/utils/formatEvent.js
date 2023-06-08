function formatEvents(shows){
    const formattedShows = shows.map((show) => {
      return {
        date: show.dates.start.localDate,
        time: show.dates.start.localTime,
        venue: show._embedded.venues[0].name
      }
    });
    return formattedShows
  }

  export { formatEvents }