<script lang="ts">
    import Button from '../ui/Button.svelte';
    import { active, login, logout, address, network } from "../../stores";
	import NETWORK from '../../config/networks';

    $: shortAddress = $address ? `${$address.substring(0, 5)}...${$address.substring($address.length - 4)}` : null;
    $: networkName = NETWORK[$network];

    async function connect() {
        login();
    }

    async function disconnect() {
        logout();
    }
</script>

{#if $active}
    <Button>
        <img src="./images/metamask.svg" height="15px" alt="metamask" />
        { networkName }
    </Button>
    <Button on:click="{disconnect}">
        { shortAddress }
    </Button>
{:else}
    <Button on:click="{connect}">
        Connect Wallet
    </Button>
{/if}
