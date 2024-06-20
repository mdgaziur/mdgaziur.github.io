<script lang="ts">
	export let name: string;
</script>

<div
	class="skill-card shadow-black/[0.25] shadow-lg flex items-center w-full max-w-md sm:gap-5 gap-3 border-[1px] sm:p-10 p-5 bg-white/[0.02] rounded-xl border-white/[0.11] hover:bg-white/5 transition-colors"
>
	<slot />
	<h2 class="text-2xl">{name}</h2>
</div>
