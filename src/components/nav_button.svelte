<script lang="ts">
	export let on_click: () => void;
	export let text: string;
	export let is_selected = false;
</script>

<button
	class={`flex items-center gap-3 sm:block sm:p-4 p-5 font-semibold border-t-[1px] border-b-[1px] sm:border-l-[1px] sm:border-r-[1px] sm:rounded-lg${is_selected ? ' border-white/[0.11] nav-button-active' : ' border-transparent'} transition-colors`}
	on:click={on_click}
>
	<slot />
	<span class="sm:hidden text-[#AFD6F6]">{text}</span>
</button>
