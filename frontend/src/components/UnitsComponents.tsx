export default () => {
    return(
    if (unitTypes.length.active) {
      return (
        <>
          <option value="" >--please choose an option--</option>
          {Object.entries(units.length).map((item) => {
            return <option value={item[1]} key={item[0]}>{item[0]}</option>
          })}
        </>
      )
    }
    if (unitTypes.weight.active) {
      return (
        <>
          <option value="" >--please choose an option--</option>
          {Object.entries(units.weight).map((item) => {
            return <option value={item[1]} key={item[0]}>{item[0]}</option>
          })}
        </>
      )
    }
    if (unitTypes.temperature.active) {
      return (
        <>
          <option value="" >--please choose an option--</option>
          {Object.entries(units.temperature).map((item) => {
            return <option value={item[1]} key={item[0]}>{item[0]}</option>
          })}
        </>
      )
    })
  }
