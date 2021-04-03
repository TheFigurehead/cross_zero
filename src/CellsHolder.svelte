<script>
    import Cell from './Cell.svelte';
	export let board;
</script>

<div class="cells_holder">
    {#each board as row}
		{#each row as item}
            <Cell bind:value={item}/>
        {/each}
	{/each}
</div>

<style>
    .cells_holder {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        gap: 10px 10px;
        grid-template-areas:
            ". . ."
            ". . ."
            ". . .";

        width: 360px;
        margin: auto;
    }
</style>