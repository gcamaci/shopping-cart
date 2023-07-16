import dayjs from "dayjs";
import customParseFormat from 'dayjs'
dayjs.extend(customParseFormat)

function formatEvents(shows){
    const formattedShows = shows.map((show) => {
      const newDate = dayjs(show.dates.start.localDate).format('MMM DD');
      const newTime = dayjs(show.dates.start.dateTime).format('h:mm A');
      const weekday = dayjs(show.dates.start.dateTime).format('ddd')
      
      return {
        show_id: show.id,
        date: newDate,
        time: newTime,
        day: weekday,
        venue: show._embedded.venues[0].name,
        venue_location: `${show._embedded.venues[0].city.name}, ${show._embedded.venues[0].state.name}`
      }
    });
    console.log(formattedShows)
    return formattedShows
  }

  export { formatEvents }