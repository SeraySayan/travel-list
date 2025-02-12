export function Stats({ numItems, numPackedItems }) {
	if (numItems === 0)
		return (
			<p className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</p>
		);

	const percentage = Math.round((numPackedItems / numItems) * 100);
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? 'You got everything! Ready to go ✈️'
					: `💼 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percentage}%)`}
			</em>
		</footer>
	);
}
