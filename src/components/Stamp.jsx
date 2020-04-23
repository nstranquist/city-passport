import React from 'react'

// display unique information about the stamp
// will include name for profile data
const Stamp = ({
  stamp,
    // id,
    // name,
    // category,
    // location,
    // date,
}) => {
  return (
    // can add filters for breakfast/lunch/dinner/snack
    <div className="stamp">
      <p>{stamp.name}</p>
      <p>{stamp.category}</p>
      <p>{stamp.location}</p>
    </div>
  )
}

export default Stamp
