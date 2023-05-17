<svelte:head>
	<title>TimeEnjoyed's CodeJam</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Ubuntu+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex row">
	<main class="main-container flex col">
		<div class="icon top-right" />
		<div class="top-left">
			<div class="nav-container sp-bwtn flex col">
				<button class="nav-btn" id="btn-about">Goal</button>
				<button class="nav-btn" id="btn-timeline">Timeline</button>
				<button class="nav-btn" id="btn-rules">Rules</button>
				<button class="nav-btn" id="btn-prizes">Prizes</button>
				<button class="nav-btn" id="btn-entries">Entries</button>
				<button class="nav-btn" id="btn-credits">Credits</button>
			</div>
		</div>
	</main>
	<main class="main-container flex col">
		<div class="bottom-left">
			<div class="banner">
				<div class="banner-top">TimeEnjoyed's</div>
				<div class="banner-bottom">
					{'< codejam/ >'}
				</div>
			</div>
		</div>

		<div class="bottom-right">
			<div class="content-container flex col" id="content-container">
				<div class="scrollable-content flex col" id="scrollable-content">
					<slot>main content goes here</slot>
				</div>
			</div>
			<div class="content-container-bg" style="z-index: -1" />
		</div>
	</main>
</div>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(*) {
		margin: 0;
		border: 0px solid red;
	}
	:global(html, body) {
		height: 100%;
	}
	:global(body) {
		line-height: 1.5;
		background: #323742;
		font-family: 'Ubuntu Mono', monospace;
		color: whitesmoke;
		-webkit-font-smoothing: antialiased;
	}
	:global(img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}

	:global(input, button, textarea, select) {
		font: inherit;
	}

	:global(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}
	:global(#root, #__next) {
		isolation: isolate;
	}

	:global(strong) {
		color: #f6abb5;
	}
	:global(ul) {
		list-style: none;
		text-indent: -20px;
	}

	:global(li::before) {
		content: '✽ ';
		color: #afa186;
	}
	:global(.flex) {
		display: flex;
	}
	:global(.row) {
		flex-direction: row;
	}
	:global(.col) {
		flex-direction: column;
	}
	:global(.center) {
		align-items: center;
	}
	:global(.sp-bwtn) {
		justify-content: space-between;
	}
	:global(.icon) {
		width: 12em;
		height: 8em;
	}
	:global(.main-container) {
		flex-wrap: wrap;
	}
	.banner-top {
		font-size: 2em;
		font-family: 'Liu Jian Mao Cao', cursive;
	}
	.banner-bottom {
		font-size: 4em;
	}
	.nav-container {
		padding: 3em 3em;
		gap: 3em;
	}
	.nav-btn {
		color: whitesmoke;
		background: #3f4e69;
		border-radius: 100px;
		font-size: 1.1em;
		width: 10em;
		height: 3em;
		text-decoration: none;
		text-align: center;
		line-height: 3em;
	}
	.nav-btn:hover {
		filter: brightness(150%);
		box-shadow: 0.25em 0.25em #f18e8e;
		transition: filter 0.3s;
		transition: box-shadow 0.4s;
		transition-timing-function: ease-in-out;
	}
	.nav-btn:active {
		background: #ab376c;
	}
	.bottom-right .content-container {
		padding: 4em 3em;
		border-radius: 50px;
		background: #3f4e69;
		width: 50em;
		height: 50em;
		gap: 2em;
	}
	.content-container {
		background: transparent;
		width: 50em;
		max-height: 50em;
		gap: 2em;
		/* for Firefox */
		min-height: 0;
		overflow: hidden;
	}
	.content-container-bg {
		position: absolute;
		top: 9.5em;
		left: 17.5em;
		padding: 8em 3em;
		border-radius: 59px;
		background: #f18e8e;
		width: 50em;
		height: 50em;
		/*background: #f0b7b1;*/
	}
	.scrollable-content {
		flex: 1;
		max-width: 50em;
		max-height: 50em;
		gap: 2em;
		overflow: auto;
		padding-right: 2em;

		/* for Firefox */
	}
	/*.scrollable-content::before {*/
	/*  content: '';*/
	/*  display: block;*/
	/*  position:sticky;*/
	/*  height: 50px;*/
	/*  background: linear-gradient(to top, #3f4d68, #333 50%, #3f4d68 75%, #333 75%);*/
	/*}*/
	/*.scrollable-content::after {*/
</style>
