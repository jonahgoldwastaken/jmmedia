import { NowRequest, NowResponse } from '@now/node'

export default (_: NowRequest, res: NowResponse) => {
  res.end('hoi :)')
}
