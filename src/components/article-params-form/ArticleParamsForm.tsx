import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
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

type Props = {
	callback: (font: OptionType) => void;
	callback2: (fontColor: OptionType) => void;
	callback3: (fontColor: OptionType) => void;
};

export const ArticleParamsForm = (props: Props) => {
	const [open, isOpen] = useState(false);
	const handleOpen = () => isOpen(!open);

	const menuStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: open,
	});

	const [font, isFont] = useState(defaultArticleState.fontFamilyOption);
	const fontChange = (e: OptionType) => isFont(e);

	const [fontColor, isFontColor] = useState(defaultArticleState.fontColor);
	const fontColorChange = (e: OptionType) => isFontColor(e);

	const [bgColor, isBgColor] = useState(defaultArticleState.backgroundColor);
	const bgColorChange = (e: OptionType) => isBgColor(e);

	const setSettings = () => {
		event?.preventDefault();
		props.callback(font);
		props.callback2(fontColor);
		props.callback3(bgColor);
	};

	return (
		<>
			<ArrowButton isOpen={handleOpen} menuOpen={open} />
			<aside className={menuStyle}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						onChange={fontChange}
						selected={font}
						options={fontFamilyOptions}
						title='шрифт'
					/>
					<RadioGroup
						name='размер шрифта'
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						title='размер шрифта'
					/>
					<Select
						onChange={fontColorChange}
						selected={fontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						onChange={bgColorChange}
						selected={bgColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={contentWidthArr[0]}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' onClick={setSettings} />
					</div>
				</form>
			</aside>
		</>
	);
};
