export function controlView(
  controlView: () => JSX.Element | string | null,
  sure?: (...args: any) => any,
  cancle?: (...args: any) => any
) {
  let cacheView = controlView()
  return (
    <div>
      <div class="control-container">我是画布参数调节</div>
      <div>{cacheView}</div>
      <div>
        <button onClick={sure}>确定按钮</button>
        <button onClick={cancle}>取消按钮</button>
      </div>
    </div>
  )
}
