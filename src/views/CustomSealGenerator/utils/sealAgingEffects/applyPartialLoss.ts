// 局部缺失效果

interface AgingOptions {
  intensity: number
}

export function applyPartialLoss(ctx :CanvasRenderingContext2D, agingOptions: AgingOptions, sealOptions) {
  const { intensity } = agingOptions
    const holes = 8 * intensity

    for (let i = 0; i < holes; i++) {
        const x = w / 2 + (Math.random() - 0.5) * 80
        const y = h / 2 + (Math.random() - 0.5) * 80
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(x, y, 5 + 15 * intensity, 0, Math.PI * 2)
        ctx.fill()
    }
}