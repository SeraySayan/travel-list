import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, deleteItem, changeCheck, handleClearList }) {
	const [selection, setSelection] = useState('input');
	let sortedItems;
	if (selection === 'input') sortedItems = items;
	if (selection === 'description')
		sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
	if (selection === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item item={item} key={item.id} deleteItem={deleteItem} changeCheck={changeCheck} />
				))}
			</ul>
			<div className="action">
				<select value={selection} onChange={(e) => setSelection(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={handleClearList}>Clear list</button>
			</div>
		</div>
	);
}
