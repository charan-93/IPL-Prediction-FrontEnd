import Item from "./items";
function Food({items}){
    return <ul class="list-group">
    {items.map((item)=>
        <Item key={item} fooditem={item}></Item>
    )
}
  </ul>
}
export default Food;