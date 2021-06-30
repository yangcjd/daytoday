import { instanceRequest } from '../request.js'
export function getHomeMultidata(){
  return instanceRequest({
    url: '/home/multidata'
  })
}