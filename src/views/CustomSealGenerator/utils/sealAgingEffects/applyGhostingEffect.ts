// 重影效果
interface Params {
  offsetX: number,
  offsetY: number,
  alpha: number
}
export function applyGhosting(ctx: CanvasRenderingContext2D, offscreen: HTMLCanvasElement, params: Params, sealOptions) {
  const { offsetX, offsetY, alpha} = params
  ctx.globalAlpha = alpha
  ctx.drawImage(offscreen, offsetX, offsetY)
  ctx.globalAlpha = 1
}