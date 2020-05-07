import { NowRequest, NowResponse } from '@now/node'

export default (_: NowRequest, res: NowResponse) => {
  res.status(404).end('Bestaat niet, oepsiewoepse -U-')
}
