<script>

    export let value;
    let disabled = false;

    import { get } from 'svelte/store';
	import { turn } from './stores.js';

	import CrossCell from './CrossCell.svelte';
	import ZeroCell from './ZeroCell.svelte';

    const changeValue = () => { 
        if(!disabled){
            const isCross = get(turn);
            if(isCross){
                value = 1; 
            }else{
                value = 2; 
            }
            turn.update( n => !n); 
            disabled = true;
        }
    }

</script>

<div class="cell" on:click={changeValue}>
    {#if value == 1}
        <CrossCell />
    {:else if value == 2}
        <ZeroCell />
    {/if}
</div>

<style>
    .cell{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #e0e0e0;
        transition: all .2s ease-in-out;
        border: 1px solid #333;
        cursor: pointer;
        position: relative;
    }
    .cell:hover{
        -webkit-box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
        box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%)
    }
</style>