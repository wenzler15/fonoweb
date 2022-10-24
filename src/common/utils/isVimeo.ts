export function isVimeo(url: string) {
	return /vimeo.*\/(?<id>\d+)/i.test(url)
}
