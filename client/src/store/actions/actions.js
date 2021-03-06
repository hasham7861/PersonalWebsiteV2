import {
	SAVE_EMAIL,
	SAVE_SUBJECT,
	SAVE_MESSAGE,
	CLEAR_EMAIL_FORM,
}	from '../constants/actionTypes';

// The following actions are possible on emailMessage
export const saveEmail = email => ({
	type:SAVE_EMAIL,
	email
});
export const saveSubject = subject => ({
	type: SAVE_SUBJECT,
	subject
});
export const saveMessage = message => ({
	type: SAVE_MESSAGE,
	message
});
export const clearEmailForm = () =>({
	type: CLEAR_EMAIL_FORM,
});
