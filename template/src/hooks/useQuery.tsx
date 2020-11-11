import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { parse, ParsedQs } from 'qs'

export default function useQuery(): ParsedQs {
  const location = useLocation()

  const query = useMemo(() => {
    return parse(location.search, {
      depth: 0,
      ignoreQueryPrefix: true,
    })
  }, [location.search])

  return query
}
