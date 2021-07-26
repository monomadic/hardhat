<script lang="ts">
	import DetectWeb3 from './components/web3/DetectWeb3.svelte';
	import ConnectWallet from './components/web3/ConnectWallet.svelte';
	import Wallet from './components/web3/Wallet.svelte';

	import { address, active, network } from './stores';
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
</svelte:head>

<main>
	<h1>🍦YieldPuff🍦</h1>
	<ConnectWallet />
	<DetectWeb3>
		{#if $active }
			<Wallet />
		{/if}
	</DetectWeb3>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(body) {
		background-color: rgb(242, 252, 113);
	}

	:global(h1) {
		font-family: Gelasio;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
