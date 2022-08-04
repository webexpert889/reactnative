import {Dimensions} from "react-native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {heightToDp, widthToDp} from "./responsive";

export const {width, height} = Dimensions.get("window");

export const dynamicSize = (val, byWidth = false) => {
	return RFValue(parseFloat(val), byWidth ? width : height);
};
export const dynamicSizeByPercentage = (
	val,
	{byWidth = false, byHeight = false}
) => {
	if (byWidth) {
		return widthToDp(val);
	}
	if (byHeight) {
		return heightToDp(val);
	}
	return RFPercentage(val);
};
