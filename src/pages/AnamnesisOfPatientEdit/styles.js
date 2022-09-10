import styled from 'styled-components'

export const Container = styled.div`
	background: #e5e5e5;
	padding-bottom: 4rem;

	section {
		background: #fff;
		padding: 4rem;
		margin: 4rem 4rem 0;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

		.info-top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 100px;

			h1 {
				color: #803888;
				font-family: 'Lato';
				font-weight: 700;
				margin-bottom: 10px;
			}

			button {
				border: 0;
				border-radius: 0.25rem;
				padding: 14px 24px;
				height: 48px;
				line-height: 20px;
				background: #803888;
				color: #fff;

				&:hover {
					background: #5e2963;
				}
			}
		}

		.anamnese-info {
			margin-bottom: 25px;
			max-width: max-content;

			&-top {
				margin-bottom: 25px;
				display: flex;
				justify-content: flex-end;
			}

			&-bottom {
				align-items: flex-end;
				margin-left: 73px;
				display: flex;
				flex-direction: column;
				margin-bottom: 25px;

				div {
					align-items: center;
					display: flex;
				}
			}

			button {
				border: 0;
				border-radius: 0.25rem;
				padding: 14px 24px;
				height: 48px;
				line-height: 20px;
				background: #803888;
				color: #fff;

				&:hover {
					background: #5e2963;
				}
			}

			input {
				border: 2px solid #d9e1e7;
				height: 60px;
				margin-right: 10px;
				padding: 29px;
				border-radius: 20px;
				width: 470px;
				max-width: 100%;
			}
		}

		.box-action {
			margin-top: 100px;

			button {
				padding: 1rem 2rem;
				margin-top: 2rem;
				border-radius: 50px;
				border: 0;
				color: #fff;
				background: #1e98d4;
				width: 100%;
			}

			button:hover {
				background-color: #125b80;
			}
		}
	}
`
