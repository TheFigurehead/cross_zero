
<script>
	import CellsHolder from './CellsHolder.svelte';
	import { get } from 'svelte/store';
	import { turn } from './stores.js';
	export let board;
	let isCross = get(turn);
	const updateTurn = (value) => isCross=value
	turn.subscribe( (value) => {updateTurn(value); console.log(value)})
</script>

<main>
	<b>Ход: { (isCross) ? 'Крестики' : 'Нолики' }</b>
	<h1>Крестики-нолики!</h1>
	<CellsHolder bind:board={board} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>