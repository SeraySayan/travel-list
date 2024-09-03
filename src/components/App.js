import { useState } from 'react';
import { Logo } from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

export default function App() {
	const [items, setItems] = useState([]);
	const numItems = items.length;
	const numPackedItems = items.filter((item) => item.packed).length;
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((i) => i.id !== id));
	}
	function handleCheck(id) {
		setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	}
	function handleClearList() {
		const confirmed = window.confirm('Are you sure you want to delete all items');
		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form addItems={handleAddItems} />
			<PackingList
				items={items}
				deleteItem={handleDeleteItem}
				changeCheck={handleCheck}
				handleClearList={handleClearList}
			/>
			<Stats numItems={numItems} numPackedItems={numPackedItems} />
		</div>
	);
}
