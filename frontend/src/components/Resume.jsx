import React from 'react';
export default function Resume(Text, LenChar = 10) {
	if (typeof Text !== 'string'){
		return Text
	}
	if (Text.length <  LenChar){
		return Text
	}
	let Parts = Text.split(' ')
	let Title = ""
	if (Parts.length >= 2){
		Title = Parts[0] + " " + Parts[1] + "..."
	} else {
		Title = Text.substring(0, LenChar)
	}


	return (
		<span data-toggle="tooltip" title={Text}>{Title}</span>
	);
}