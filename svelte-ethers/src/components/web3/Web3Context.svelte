<script>
    import { onMount, setContext } from "svelte";

    let connected;

    function connect() {
        connected = true;
    }

    onMount(() => {
        connected = false;
    })

    setContext('web3', connect);
</script>

<slot />
