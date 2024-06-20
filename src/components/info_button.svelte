<script lang="ts">
	export let link: string;
</script>

<a class="bg-white/[0.02] hover:bg-white/5 transition-colors p-2 rounded-lg border-[1px] border-white/[0.11]" href={link} target="_blank">
	<slot />
</a>
