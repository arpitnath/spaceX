import React from 'react'
import screenStyles from '../styles/screens.module.css'
import { getDate } from '../utils'

const Tables = ({ data, loading, thead }) => {
  if (!loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <table className={screenStyles.Table}>
        <thead>
          <tr>
            {thead.map(th => (
              <th key={th.id}>{th.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map(launch => (
            <tr
              key={launch.flight_number}
              onClick={() => console.log('modal here')}
            >
              <td>{launch.flight_number}</td>
              <td>{getDate(launch.launch_date_utc)}</td>
              <td>{launch.launch_site.site_name_long}</td>
              <td>{launch.mission_name}</td>
              <td>{launch.rocket.second_stage.payloads[0].orbit}</td>
              <td>need_to_fix</td>
              <td>{launch.rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Tables
