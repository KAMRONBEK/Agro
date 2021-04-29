import I18n from 'react-native-i18n';
import ru from './ru';
import en from './en';
import uz from './uz';

I18n.fallbacks = true;

I18n.translations = {
	ru,
	en,
	uz
};

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
	return I18n.t(name);
}

export default I18n;


