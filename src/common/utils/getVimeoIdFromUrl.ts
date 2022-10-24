export function getVimeoIdFromUrl(url: string) {
	const match = url.match(/vimeo.*\/(?<id>\d+)/i)
	return match?.groups?.id
}
