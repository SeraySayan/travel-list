export function Item({ item, deleteItem, changeCheck }) {
	return (
		<li className="item">
			<input type="checkbox" value={item.packed} onChange={() => changeCheck(item.id)}></input>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => deleteItem(item.id)}>❌</button>
		</li>
	);
}
