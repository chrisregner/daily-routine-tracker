import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RoutineItem from './subcomponents/RoutineItem'

// TODO: turn 'Add one' text into a link
const RoutineList = ({
  routines, handleStartTracker, handleStopTracker, handleEditRoutine, handleResetTracker
}) => (<ul>
  {
    (routines && routines.length)
    ? (

      routines.map(routine => (
        <RoutineItem
          key={routine.id}
          handleStartTracker={handleStartTracker}
          handleStopTracker={handleStopTracker}
          handleResetTracker={handleResetTracker}
          {...routine}
        />
      ))

    )
    : (

      <div className='pa3 mt6 f3 lh-copy'>
        There is no routine! <br />
        <Link to='/routines/new'>Add one.</Link>
      </div>

    )
  }
</ul>)

RoutineList.propTypes = {
  handleStartTracker: PropTypes.func.isRequired,
  handleStopTracker: PropTypes.func.isRequired,
  handleResetTracker: PropTypes.func.isRequired,
  routines: PropTypes.arrayOf(
    PropTypes.shape(RoutineItem.propTypes)
  ).isRequired,
}

export default RoutineList
