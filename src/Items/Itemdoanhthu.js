import React from 'react'

const Itemdoanhthu = (props) => {
  const { val, index } = props;

  let style = val.Game.game.trangThai === 'Đang hoạt động' ? '#54B435' : val.Game.game.trangThai === 'Đang được chơi' ? '#FFBF00' :'#DC3535'
  return (
    <tr id="itemus1">

      <td>{index}</td>
      <td>{val.Game.game.tenGame}</td>
      <td style={{ color: `${style}` }}>{val.Game.game.trangThai}</td>

      <td>{val.Doanhthu}</td>



    </tr>
  )
}

export default Itemdoanhthu