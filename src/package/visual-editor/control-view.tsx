export function controlView(
  controlView: () => JSX.Element | string | null,
  sure?: (...args: any) => any
) {
  return (
    <div>
      <div class="control-container">我是画布参数调节</div>
      <div>{controlView()}</div>
      <div>
        <button>确定按钮</button>
        <button>取消按钮</button>
      </div>
    </div>
  )
}
