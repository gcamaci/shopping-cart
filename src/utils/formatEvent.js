import dayjs from "dayjs";
import customParseFormat from 'dayjs'
dayjs.extend(customParseFormat)

function formatEvents(shows){
    const formattedShows = shows.map((show) => {
      console.log(show)
      // const today = dayjs().year()
      // console.log(today)
      const newDate = dayjs(show.dates.start.localDate).format('MMM DD');
      const newTime = dayjs(show.dates.start.dateTime).format('h:mm A');
      const weekday = dayjs(show.dates.start.dateTime).format('ddd')
      console.log(newTime)
      console.log(newDate)
      return {
        show_id: show.id,
        date: newDate,
        time: newTime,
        day: weekday,
        venue: show._embedded.venues[0].name
      }
    });
    console.log(formattedShows)
    return formattedShows
  }

  export { formatEvents }