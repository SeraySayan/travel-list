import { useState } from 'react';

export function Form({ addItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(event) {
		event.preventDefault();
		if (!description) return;
		const newItem = { id: Date.now(), description, quantity, packed: false };
		console.log(newItem);
		addItems(newItem);
		setDescription('');
		setQuantity(1);
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need dor your 😍 trip? </h3>
			<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((number) => {
					return (
						<option value={number} key={number}>
							{number}
						</option>
					);
				})}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>ADD</button>
		</form>
	);
}
