<script lang="ts">
	export let on_click: () => void;
	export let text: string;
	export let is_selected = false;
</script>

<button
	class={`flex items-center gap-3 sm:block sm:p-4 p-2 sm:rounded-lg${is_selected ? ' nav-button-active' : ''} transition-colors`}
	on:click={on_click}
>
	<slot />
	<span class="sm:hidden" style={`color: ${is_selected ? `#1D1D1D` : `#AFD6F6`}`}>{text}</span>
</button>
