import { useLocation } from 'react-router-dom'
import { parse, ParsedQs } from 'qs'

export default function useQuery(): ParsedQs {
  return parse(useLocation().search, {
    depth: 0,
    ignoreQueryPrefix: true,
  })
}
