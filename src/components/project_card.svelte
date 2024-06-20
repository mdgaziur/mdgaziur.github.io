<script lang="ts">
	import { onMount } from 'svelte';

	export let repo: string;
	export let wip = false;

	let description = '';
	let stars = '';

	onMount(async () => {
		// don't really need any error handling here IG
		let resp = await fetch(`https://api.github.com/repos/${repo}`);
		let info = await resp.json();
		stars = info.stargazers_count;
		description = info.description;
	});
</script>

<div
	class="project-card flex overflow-hidden w-full flex-col justify-between max-w-md sm:gap-5 gap-3 border-[1px] rounded-xl border-white/[0.11] bg-white/[0.02] hover:bg-white/5 transition-colors"
>
	<div class="flex flex-col sm:gap-5 gap-3 sm:p-10 p-7">
		<h2>{repo} {wip ? '(WIP)' : ''}</h2>
		<p>{description}</p>
	</div>
	<div class="text-center text-xl flex border-t-[1px] border-white/[0.11] font-semibold">
		<a
			class="transition-colors hover:bg-white/[0.11] flex-1 p-5 border-r-[1px] border-white/[0.11]"
			href={`https://github.com/${repo}`}
			target="_blank">Repo</a
		>
		<a
			class="transition-colors hover:bg-white/[0.11] flex items-center justify-center gap-1 flex-1 p-5"
			href={`https://github.com/${repo}/stargazers`}
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style="fill: #AFD6F6;"
				><path
					d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
				></path></svg
			>
			{stars}
		</a>
	</div>
</div>
