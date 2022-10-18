export function getYoutubeIdFromUrl(url: string) {
	const match = url.match(
		/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)(?<id>[^#&?]*).*/,
	)
	return match?.groups?.id
}
