import styled from 'styled-components'

export const Root = styled.label`
	border: 2px solid lightgray;
	border-radius: 5px;
	width: 100%;
	margin-bottom: 10px;
`

export const Input = styled.input`
	width: 100%;
	appearance: none;
	background-color: initial;
	cursor: default;
	align-items: baseline;
	color: inherit;
	text-overflow: ellipsis;
	white-space: pre;
	text-align: start !important;
	padding: initial;
	border: initial;
	overflow: hidden !important;
	&::file-selector-button {
		margin-right: 10px;
		background-color: #803888;
		color: white;
		font-size: 1rem;
		border: none;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 12px;
		padding-right: 12px;
	}
`
