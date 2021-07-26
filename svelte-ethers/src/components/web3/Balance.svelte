<script lang="ts">
    import { provider } from "../../stores";
    import { ethers, Signer } from "ethers";
    import { onMount } from "svelte";

    export let contractAddress;
    export let walletAddress;

    $: contract = new ethers.Contract(contractAddress, abi, signer);
    $: balance = 0;

    let transaction;

    const signer: Signer = new ethers.providers.Web3Provider(provider).getSigner();

    const abi = [
        // Read-Only Functions
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)",

        // Authenticated Functions
        "function transfer(address to, uint amount) returns (boolean)",

        // Events
        "event Transfer(address indexed from, address indexed to, uint amount)",
    ];

    async function call() {
        balance = await contract["balanceOf"](walletAddress);
        console.log(balance);
    }

    onMount(() => {
        call();
    })

</script>

{ parseFloat(ethers.utils.formatUnits(balance, 18)).toFixed(2) }