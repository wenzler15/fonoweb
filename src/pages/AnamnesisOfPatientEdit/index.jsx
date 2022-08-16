import { useState } from 'react'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import Swal from 'sweetalert2'
import htmlToDraft from 'html-to-draftjs'
import { convertToHTML } from 'draft-convert'
import { InputFile } from '../../common/components'
import { usePdfToHtml } from '../../anamnesis/mutations'
import { NavBar } from '../../components/navBar'
import { Container } from './styles'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import 'modern-normalize/modern-normalize.css'
import './styles.css'
import DOMPurify from 'dompurify'

window.htmlToDraft = htmlToDraft

function AnamnesisOfPatientEdit() {
	const pdfToHtml = usePdfToHtml()
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty(),
	)

	const editorStateToHtml = editorState => {
		const contentState = editorState.getCurrentContent()
		const html = convertToHTML(contentState)
		return DOMPurify.sanitize(html)
	}

	const [questions, setQuestions] = useState([
		{
			title: 'Pergunta',
			response: ['Resposta 01', 'Resposta 02', 'Resposta 03'],
		},
		{ title: 'Pergunta 02', response: ['Resposta 02'] },
	])

	// useEffect(() => {
	//   // get API
	//   // setQuestions(dataAPI);
	// }, [])

	function handleChangeQuestionInput(event) {
		const { name, value } = event.target
		const inputsListTemp = [...questions]

		inputsListTemp[name].title = value

		setQuestions(inputsListTemp)
	}

	function handleChangeResponseInput(event) {
		const { name, value } = event.target
		const indexQuestionTarget = name.split('.')[0]
		const indexResTarget = name.split('.')[1]

		const inputsListTemp = [...questions]

		inputsListTemp[indexQuestionTarget].response[indexResTarget] = value

		setQuestions(inputsListTemp)
	}

	function handleClickAddQuestion(indexQuestion) {
		const questionsTemp = [...questions]

		questionsTemp[indexQuestion].response.push('Nova resposta')

		setQuestions(questionsTemp)
	}

	function handleClickRemoveResp(element) {
		// Verificando se é a unica resposta da Anamnese
		if (questions.length === 1 && questions[0].response.length === 1) return

		const indexComplete = element.target.dataset.indexBtn
		const indexQuestionTarget = indexComplete.split('.')[0]
		const indexResTarget = indexComplete.split('.')[1]

		let arrTemp = [...questions]

		arrTemp[indexQuestionTarget].response.splice(indexResTarget, 1)

		// verificando se a pergunta não tem nenhuma resposta
		if (arrTemp[indexQuestionTarget].response.length === 0) {
			const arrFiltrada = arrTemp.filter(item => item.response.length > 0)

			arrTemp = arrFiltrada
		}

		setQuestions(arrTemp)
	}

	function handleClickAddNewQuestion() {
		const questionsTemp = [...questions]

		questionsTemp.push({ title: 'Nova pergunta', response: ['resposta'] })

		setQuestions(questionsTemp)
	}

	const handleFileChange = async ([file]) => {
		if (!file) {
			return undefined
		}

		if (file.type !== 'application/pdf') {
			return Swal.fire({
				title: 'Ops!',
				text: 'O arquivo deve ser do tipo PDF',
				icon: 'warning',
				confirmButtonText: 'OK',
			})
		}

		try {
			const response = await pdfToHtml.mutateAsync(file)
			const blocksFromHtml = htmlToDraft(response.data.result)
			const { contentBlocks, entityMap } = blocksFromHtml
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			)
			const editorState = EditorState.createWithContent(contentState)
			setEditorState(editorState)
		} catch (error) {
			console.error(error)
			return Swal.fire({
				title: 'Ops!',
				text: 'Não foi possível utilizar o PDF para edição. Tente novamente.',
				icon: 'error',
				confirmButtonText: 'Voltar',
			})
		}

		return undefined
	}

	const handleSubmit = () => {
		const html = editorStateToHtml(editorState)
		console.log(html)
	}

	function AnamneseQuestionElement(title, resp, indexQuestion) {
		return (
			<div
				key={indexQuestion}
				className="anamnese-info"
				data-index={indexQuestion}
			>
				<div className="anamnese-info-top">
					<div>
						<input
							type="text"
							placeholder="Insira a pergunta"
							value={questions[indexQuestion].title}
							name={`${indexQuestion}`}
							onChange={event => handleChangeQuestionInput(event)}
						/>
						<button
							data-index={`${indexQuestion}`}
							onClick={() => handleClickAddQuestion(indexQuestion)}
						>
							Adicionar resposta
						</button>
					</div>
				</div>
				<div className="anamnese-info-bottom">
					{resp.length &&
						resp.map((respText, indexResp) =>
							AnamneseResElement(respText, indexQuestion, indexResp),
						)}
				</div>
			</div>
		)
	}

	function AnamneseResElement(respText, indexQuestion, indexResp) {
		const subIndex = `${indexQuestion}.${indexResp}`

		return (
			<div key={indexResp} className="anamnese-info-bottom">
				<div>
					<input
						type="text"
						placeholder="Insira uma resposta"
						value={questions[indexQuestion].response[indexResp]}
						name={`${indexQuestion}.${[indexResp]}`}
						onChange={event => handleChangeResponseInput(event)}
					/>
					<button
						data-index-btn={subIndex}
						onClick={(element, indexElement) =>
							handleClickRemoveResp(element, indexElement)
						}
					>
						Excluir
					</button>
				</div>
			</div>
		)
	}

	return (
		<Container>
			<NavBar />
			<section className="info">
				<div className="info-top">
					<div>
						<h1>Anamnese do paciente</h1>
					</div>
					<button onClick={handleClickAddNewQuestion} type="button">
						Adicionar pergunta
					</button>
				</div>
				<div className="info-bottom">
					{questions.length &&
						questions.map(({ title, response }, index) =>
							AnamneseQuestionElement(title, response, index),
						)}
				</div>

				<InputFile onChange={handleFileChange} accept="application/pdf" />

				<Editor
					editorState={editorState}
					onEditorStateChange={setEditorState}
					wrapperClassName="wrapper-class"
					editorClassName="editor-class"
					toolbarClassName="toolbar-class"
				/>

				<div className="box-action">
					<button type="button" onClick={handleSubmit}>
						Salvar alterações e fechar
					</button>
				</div>
			</section>
		</Container>
	)
}

export default AnamnesisOfPatientEdit
