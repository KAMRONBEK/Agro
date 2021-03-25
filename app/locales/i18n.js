import LocalizedStrings from "react-native-localization";

// Import all locales
import en from "./en.json";
import ru from "./ru.json";
import uz from "./uz.json";

const localization = new LocalizedStrings({
	en,
	ru,
	uz
});

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
	return localization[name];
}

export default localization;
