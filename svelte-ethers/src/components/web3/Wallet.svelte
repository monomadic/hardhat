<script lang="ts">
    import { active, network, address } from "../../stores";
    import TOKENS from '../../config/tokens';
    import Balance from './Balance.svelte';

    const tokens = TOKENS[Number($network)] || [];
</script>

{#if $active }
<table>
    {#each Object.entries(tokens) as [symbol, token]}
        <tr>
            <td align="right">
                <Balance contractAddress={token.address} walletAddress={$address} />
            </td>
            <td align="left"><strong>{symbol}</strong></td>
        </tr>
    {/each}
</table>
{/if}
