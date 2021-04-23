import React from 'react'
import { useFetch, usePaginate } from '../Hooks'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { launchtableHead } from '../data'
import { getLaunchData } from '../utils'

const LaunchScreen = () => {
  const { data, loading } = useFetch(
    'https://api.spacexdata.com/v3/launches',
    getLaunchData
  )

  const { currentPage, postsPerPage, paginate, currentPost } = usePaginate(data)

  let params = History.location.search
  let q = params.split('=page')[1]
  let query = parseInt(q)

  return (
    <div className='Wrapper'>
      {!data ? (
        'loading...'
      ) : (
        <>
          <Tables
            data={currentPost}
            thead={launchtableHead}
            loading={loading}
            name='launch'
          />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            currentPage={currentPage}
            query={query}
            route='launch'
          />
        </>
      )}
    </div>
  )
}

export default LaunchScreen
