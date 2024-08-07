import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': font,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': fontColor,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': bgColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				callback={fontChange}
				callback2={fontColorChange}
				callback3={bgColorChange}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
