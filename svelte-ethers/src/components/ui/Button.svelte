<script lang="ts">
</script>

<style>
    .button {
        background-color: black;
        color: white;
        border-radius: 5px;
        padding: 12px 30px;
        border: 0;
        font-weight: bold;
    }

    .button:hover {
        background-color: rgb(160, 62, 160);
        cursor: pointer;
    }
</style>

<button on:click class="button">
    <slot></slot>
</button>
