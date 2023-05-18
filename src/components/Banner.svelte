<div class="banner">
	<div class="hamburger-lines">
		<span class="line line1" />
		<span class="line line2" />
		<span class="line line3" />
	</div>
	<a href="/" class="banner-top">TimeEnjoyed's</a>
	<a href="/" class="banner-bottom"> {'< codejam/ >'}</a>
</div>

<style>
	.banner {
		display: flex;
		padding: 0.75em;
		gap: 1em;
		flex-direction: row;
		border-bottom: 1px solid whitesmoke;
		align-items: center;
	}

	.hamburger-lines {
		display: flex;
		height: 23px;
		width: 35px;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: whitesmoke;
	}

	.banner-top {
		font-size: 1.5em;
		font-family: 'Liu Jian Mao Cao', cursive;
		color: whitesmoke;
		text-decoration: none;
	}
	.banner-bottom {
		font-size: 1.75em;
		color: whitesmoke;
		text-decoration: none;
	}

	@media only screen and (min-width: 768px) {
		.hamburger-lines {
			display: none;
		}
		.banner {
			flex-direction: column;
			align-items: start;
			border: none;
		}
		.banner-top {
			font-size: 2em;
		}
		.banner-bottom {
			font-size: 4em;
		}
	}
</style>
