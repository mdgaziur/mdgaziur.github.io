<script lang="ts">
	export let insitution: string;
	export let description: string;
	export let start: string;
	export let end: string | null = null;
</script>

<div
	class="education-card shadow-black/[0.25] shadow-lg flex flex-col w-full max-w-md sm:gap-5 gap-3 border-[1px] sm:p-10 p-5 bg-white/[0.02] rounded-xl border-white/[0.11] hover:bg-white/5 transition-colors"
>
	<h2>{insitution}</h2>
	<div class="flex flex-col gap-1">
		<p class="text-xl flex gap-2">
			<svg
				fill="none"
				height="30"
				viewBox="0 0 48 49"
				width="25"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 14.5894V16.5894L26 24.5894L44 16.5894V14.5894L22 8.58939L4 14.5894Z"
					fill="#AFD6F6"
				/>
				<path
					d="M8 22.5894V31.1234C8 34.3654 16.002 38.9094 26 38.5914C34 38.3394 39.172 34.6474 40 31.6574C40.048 31.4794 40.074 31.3014 40.074 31.1214V22.5894L26 28.5894L16 25.2554V31.6814L14 30.9534V24.5894L8 22.5894Z"
					fill="#AFD6F6"
				/>
			</svg>
			{description}
		</p>
		<p class="text-xl flex gap-2 items-center">
			<svg
				height="25"
				style="fill: #AFD6F6;"
				viewBox="0 0 24 24"
				width="25"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
				></path>
				<path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
			</svg
			>
			{start}
			{#if end} - {end} {/if}
		</p>
	</div>
</div>
