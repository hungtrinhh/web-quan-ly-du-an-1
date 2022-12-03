import React from 'react'

const Itemdoanhthu = (props) => {
  const { val ,index} = props;


  return (
    <tr id="itemus1">
     
      <td>{index}</td>
      <td>{val.Game.game.tenGame}</td>
      <td>{val.Game.game.trangThai}</td>

      <td>{val.Doanhthu}</td>



    </tr>
  )
}

export default Itemdoanhthu