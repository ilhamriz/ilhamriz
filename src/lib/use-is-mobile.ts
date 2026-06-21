import { useWindowSize } from './use-window-size';

export const useIsMobile = () => {
	const { width } = useWindowSize();
	return width ? width < 768 : true;
};

export const useIsTablet = () => {
	const { width } = useWindowSize();
	return width ? width < 1024 : true;
};

export const useIsDesktop = () => {
	const { width } = useWindowSize();
	return width ? 1023 < width : true;
};

export const useIsDesktopTablet = () => {
	const { width } = useWindowSize();
	return width ? width >= 768 && width < 1024 : true;
};

export const useIsDesktopLg = () => {
	const { width } = useWindowSize();
	return width ? width > 1440 : true;
};

export const useSmallHeight = () => {
	const { height } = useWindowSize();
	return height ? height < 700 : true;
};