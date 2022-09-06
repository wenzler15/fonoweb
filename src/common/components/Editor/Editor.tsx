import { Card, CardContent, Typography } from '@mui/material'
import { Editor as CommonEditor } from 'react-draft-wysiwyg'
import DOMPurify from 'dompurify'
import { convertToHTML } from 'draft-convert'
import { ContentState, EditorState } from 'draft-js'
import { useField } from 'formik'
import htmlToDraft from 'html-to-draftjs'
import { useLayoutEffect, useState } from 'react'
import { EditorProps } from './Editor.types'

export function Editor({ editorState, ...editorProps }: EditorProps) {
	const [, meta, helper] = useField<string>(editorProps)
	const [localEditorState, setLocalEditorState] = useState<EditorState>(() =>
		EditorState.createEmpty(),
	)

	useLayoutEffect(() => {
		if (meta.initialValue && meta.initialValue.length > 0) {
			const blocksFromHtml = htmlToDraft(meta.initialValue)
			const { contentBlocks, entityMap } = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			)
			setLocalEditorState(EditorState.createWithContent(contentState))
		}
	}, [meta.initialValue])

	useLayoutEffect(() => {
		if (editorState) {
			setLocalEditorState(editorState)
		}
	}, [editorState])

	const editorStateToHtml = (currentEditorState: EditorState) => {
		const contentState = currentEditorState.getCurrentContent()
		const html = convertToHTML(contentState)

		// eslint-disable-next-line unicorn/no-unsafe-regex
		if (html.replace(/<p>(\s+)?<\/p>/g, '').length === 0) {
			return ''
		}

		return DOMPurify.sanitize(html)
	}

	return (
		<Card
			sx={{
				border: t =>
					meta.error && meta.touched ? `2px solid ${t.palette.error.main}` : '',
			}}
		>
			<CardContent>
				<CommonEditor
					onBlur={() => helper.setTouched(true)}
					editorState={localEditorState}
					onEditorStateChange={newEditorState => {
						setLocalEditorState(newEditorState)
						helper.setValue(editorStateToHtml(newEditorState), true)
					}}
					editorClassName="editor-class"
					toolbarClassName="toolbar-class"
				/>
				{meta.error && meta.touched && (
					<Typography
						color="error"
						variant="subtitle2"
						sx={{ mt: t => t.spacing(1), mb: t => t.spacing(-1) }}
					>
						{meta.error}
					</Typography>
				)}
			</CardContent>
		</Card>
	)
}
