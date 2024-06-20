<script lang="ts">
	export let link: string;
</script>

<a class="bg-[#64B0F0] p-2 rounded-lg" href={link} target="_blank">
	<slot />
</a>
