<script lang="ts">
	export let achievement: string;
	export let description: string;
	export let year: string;
</script>

<div
	class="achievement-card shadow-black/[0.25] shadow-lg flex w-full flex-col max-w-md sm:gap-5 gap-3 border-[1px] sm:p-10 p-5 rounded-xl border-white/[0.11] bg-white/[0.02] hover:bg-white/5 transition-colors"
>
	<h2>{achievement}</h2>
	<div class="flex flex-col gap-1">
		<p class="sm:text-xl text-md flex gap-2">
			<svg
				width="25"
				height="30"
				viewBox="0 0 36 37"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M34.2 4.18936H28.8V2.38936C28.8 1.91197 28.6104 1.45413 28.2728 1.11656C27.9352 0.778998 27.4774 0.589355 27 0.589355H9C8.52261 0.589355 8.06477 0.778998 7.72721 1.11656C7.38964 1.45413 7.2 1.91197 7.2 2.38936V4.18936H1.8C1.32261 4.18936 0.864773 4.379 0.527208 4.71656C0.189642 5.05413 0 5.51197 0 5.98936V11.3894C0 19.1474 3.2382 23.8274 8.6742 24.011C9.47 25.3786 10.5565 26.5547 11.857 27.4561C13.1575 28.3575 14.6401 28.9621 16.2 29.2274V32.9894H12.6V36.5894H23.4V32.9894H19.8V29.2274C21.3596 28.9611 22.8417 28.356 24.142 27.4547C25.4423 26.5534 26.5291 25.3779 27.3258 24.011C32.7618 23.8274 36 19.1474 36 11.3894V5.98936C36 5.51197 35.8104 5.05413 35.4728 4.71656C35.1352 4.379 34.6774 4.18936 34.2 4.18936ZM3.6 11.3894V7.78936H7.2V20.0834C3.9888 18.7298 3.6 13.7276 3.6 11.3894ZM18 25.7894C14.0292 25.7894 10.8 22.5602 10.8 18.5894V4.18936H25.2V18.5894C25.2 22.5602 21.9708 25.7894 18 25.7894ZM28.8 20.0834V7.78936H32.4V11.3894C32.4 13.7276 32.0112 18.7298 28.8 20.0834Z"
					fill="#AFD6F6"
				/>
			</svg>
			{description}
		</p>
		<p class="sm:text-xl text-md flex gap-2 items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				style="fill: #AFD6F6;"
				><path
					d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
				></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg
			>
			{year}
		</p>
	</div>
</div>
