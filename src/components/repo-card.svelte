<script>
	import { onMount } from 'svelte';

	export let repo;
	let stars = 0;
	let description;
	let link;
	onMount(async () => {
		const repo_info = await fetch(`https://api.github.com/repos/${repo}`);
		const json = await repo_info.json();
		stars = json.stargazers_count;
		description = json.description;
		link = `https://github.com/${repo}`;
	});
</script>

<div class="repo-card flex flex-col g-5">
	<div class="sm:p-10 p-5 flex-1">
		<h1 class="sm:text-2xl text-sm whitespace-pre-wrap">{repo}</h1>
		<p class="sm:text-md text-sm font-semibold">{description}</p>
	</div>
	<div class="flex">
		<a class="flex-1 flex justify-center p-5" href={`https://github.com/${repo}/stargazers`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style="fill: #ffffff"
				><path
					d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
				/></svg
			>
			{stars}
		</a>
		<a class="flex-1 flex justify-center p-5" href={link}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				style="fill: #ffffff"
				><path
					d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
				/><path
					d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
				/></svg
			>
			Repo
		</a>
	</div>
</div>

<style lang="scss">
	.repo-card {
		width: 400px;
		border: 1px solid #ffffff;
		mix-blend-mode: color-dodge;

		h1 {
			color: #ffffff;
		}

		p {
			color: #f6f6f6;
		}

		a {
			border: 1px solid #ffffff;
			border-bottom: none;
			border-right: none;
			color: #ffffff;
			font-weight: 700;

			&:nth-child(1) {
				border-left: 0;
			}
		}
	}
</style>
