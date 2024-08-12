import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState, OptionType } from 'src/constants/articleProps';

export const App = () => {
	const [font, isFont] = useState(defaultArticleState.fontFamilyOption.value);
	const fontChange = (font: OptionType) => isFont(font.value);

	const [fontColor, isFontColor] = useState(
		defaultArticleState.fontColor.value
	);
	const fontColorChange = (fontColor: OptionType) =>
		isFontColor(fontColor.value);

	const [bgColor, isBgColor] = useState(
		defaultArticleState.backgroundColor.value
	);
	const bgColorChange = (bgColor: OptionType) => isBgColor(bgColor.value);

	const [content, isContent] = useState(
		defaultArticleState.contentWidth.value
	);
	const contentChange = (content: OptionType) => isContent(content.value);

	const [fontSize, isFontSize] = useState(
		defaultArticleState.fontSizeOption.value
	);
	const fontSizeChange = (fontSize: OptionType) => isFontSize(fontSize.value);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': font,
					'--font-size': fontSize,
					'--font-color': fontColor,
					'--container-width': content,
					'--bg-color': bgColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				callback={{
					fontChange,
					fontColorChange,
					bgColorChange,
					contentChange,
					fontSizeChange
				}}
			/>
			<Article />
		</div>
	);
};