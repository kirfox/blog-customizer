import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { useState, useRef } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import useOverlayClose from 'src/hooks/useOverlay';

type Props = {
	callback: {
		fontChange: (font: OptionType) => void,
		fontColorChange: (fontColor: OptionType) => void;
		bgColorChange: (bgColor: OptionType) => void;
		contentChange: (content: OptionType) => void;
		fontSizeChange: (fontSize: OptionType) => void;
	}
};

export const ArticleParamsForm = (props: Props) => {

	const [open, isOpen] = useState(false);
	const handleOpen = () => isOpen(!open);

	const wrapperRef = useRef(null);
	useOverlayClose(wrapperRef, isOpen);

	const menuStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: open,
	});

	const [font, isFont] = useState(defaultArticleState.fontFamilyOption);
	const [fontColor, isFontColor] = useState(defaultArticleState.fontColor);
	const [bgColor, isBgColor] = useState(defaultArticleState.backgroundColor);
	const [content, isContent] = useState(defaultArticleState.contentWidth);
	const [fontSize, isFontSize] = useState(defaultArticleState.fontSizeOption);
	
	const chooseSettings = (e: OptionType) => {
		if(fontFamilyOptions.includes(e)) isFont(e);
		if(fontSizeOptions.includes(e)) isFontSize(e);
		if(fontColors.includes(e)) isFontColor(e);
		if(backgroundColors.includes(e)) isBgColor(e);
		if(contentWidthArr.includes(e)) isContent(e);
	}

	const setSettings = () => {
		event?.preventDefault();
		props.callback.fontChange(font);
		props.callback.fontColorChange(fontColor);
		props.callback.bgColorChange(bgColor);
		props.callback.contentChange(content);
		props.callback.fontSizeChange(fontSize);
	};

	const resetSettings = () => {
		props.callback.fontChange(defaultArticleState.fontFamilyOption);
		props.callback.fontColorChange(defaultArticleState.fontColor);
		props.callback.bgColorChange(defaultArticleState.backgroundColor);
		props.callback.contentChange(defaultArticleState.contentWidth);
		props.callback.fontSizeChange(defaultArticleState.fontSizeOption);
		isFont(defaultArticleState.fontFamilyOption)
		isFontColor(defaultArticleState.fontColor)
		isBgColor(defaultArticleState.backgroundColor)
		isContent(defaultArticleState.contentWidth)
		isFontSize(defaultArticleState.fontSizeOption)
	};

	return (
		<>
			<ArrowButton isOpen={handleOpen} menuOpen={open} />
			<aside className={menuStyle} ref={wrapperRef}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						onChange={chooseSettings}
						selected={font}
						options={fontFamilyOptions}
						title='шрифт'
					/>
					<RadioGroup 
						onChange={chooseSettings}
						name='размер шрифта'
						options={fontSizeOptions}
						selected={fontSize}
						title='размер шрифта'
					/>
					<Select
						onChange={chooseSettings}
						selected={fontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						onChange={chooseSettings}
						selected={bgColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select 
						onChange={chooseSettings}
						selected={content}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetSettings}/>
						<Button title='Применить' type='submit' onClick={setSettings} />
					</div>
				</form>
			</aside>
		</>
	);
};
