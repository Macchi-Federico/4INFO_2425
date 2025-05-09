<script>
    import DoubleCounter from "$lib/components/double_counter.svelte";
    import Counter from "$lib/components/counter.svelte"
    let contatore = 0;
    let double_contatore = 0
    let numeri = [1, 7, 2, 6, 9, 10]
    let sottolineato = true

    $: doppio = contatore * 2;
</script>

<h1>Pagina Counter!!!</h1>


<h2 class="sottolineato">Il valore del primo contatore vale: {contatore}</h2>

<h2>Doppio del primo contatore: {doppio}</h2>

<br><br>

<h2>Il valore del secondo contatore vale: {double_contatore}</h2>

<br><br>

<Counter bind:counter={contatore}/>

<br><br>

<DoubleCounter bind:counter={double_contatore}/>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>


<style>
    /* .rosso{color: red;}
    .verde{color: green;} */
    .sottolineato{text-decoration: underline;}
</style>