

function formatEvents(shows){
    const formattedShows = shows.map((show) => {
      return {
        show_id: show.id,
        date: show.dates.start.localDate,
        time: show.dates.start.localTime,
        venue: show._embedded.venues[0].name
      }
    });
    console.log(formattedShows)
    return formattedShows
  }

  export { formatEvents }