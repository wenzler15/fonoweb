import { Box } from '@mui/system'
import { getVimeoIdFromUrl } from 'common/utils/getVimeoIdFromUrl'
import { getYoutubeIdFromUrl } from 'common/utils/getYoutubeIdFromUrl'
import { isVimeo } from 'common/utils/isVimeo'
import { isYoutube } from 'common/utils/isYoutube'
import { cond, identity, T } from 'rambda'
import { useMemo } from 'react'
import { EmbedVideoProps } from './EmbedVideo.types'

const getEmbedUrl = cond([
	[
		isYoutube,
		link => `https://www.youtube.com/embed/${getYoutubeIdFromUrl(link) ?? ''}`,
	],
	[
		isVimeo,
		link => `https://player.vimeo.com/video/${getVimeoIdFromUrl(link) ?? ''}`,
	],
	[T, identity],
])

export function EmbedVideo({ title, url }: EmbedVideoProps) {
	const embedUrl = useMemo(() => getEmbedUrl(url), [url])
	return (
		<Box
			component="iframe"
			src={embedUrl}
			title={title}
			sx={{ aspectRatio: '16/9', width: '100%' }}
			frameBorder="0"
		/>
	)
}
