import CheckedOut from './CheckedOut'
import CheckedOutTime from './CheckedOutTime'
import CreatedBy from './CreatedBy'
import CloneFrom from './CloneFrom'
import CloneTime from './CloneTime'
import Date from './Date'
import DateTime from './DateTime'
import Editor from './Editor'
import ForeignKey from './ForeignKey'
import Input from './Input'
import KeyDimension from './KeyDimension'
import KeyIncremente from './KeyIncremente'
import ModifiedBy from './ModifiedBy'
import Money from './Money'
import NickName from './NickName'
import Ordering from './Ordering'
import SelectList from './SelectList'
import State from './State'
import Textarea from './Textarea'
import Time from './Time'
import Attributes from './Attributes'
import Bool from './Bool'
import Image from './Image'
import Numeric from './Numeric'
import Password from './Password'

export default function Fields (ColumnData, ChangeState) {
	if (ColumnData.field_type === 'CheckedOut'){
		return new CheckedOut(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'CheckedOutTime') {
		return new CheckedOutTime(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'CreatedBy') {
		return new CreatedBy(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'CloneFrom') {
		return new CloneFrom(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'CloneTime') {
		return new CloneTime(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Date') {
		return new Date(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'DateTime') {
		return new DateTime(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Editor') {
		return new Editor(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'ForeignKey') {
		return new ForeignKey(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Input') {
		return new Input(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'KeyDimension') {
		return new KeyDimension(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'KeyIncremente') {
		return new KeyIncremente(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'ModifiedBy') {
		return new ModifiedBy(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Money') {
		return new Money(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'NickName') {
		return new NickName(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Ordering') {
		return new Ordering(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'SelectList') {
		return new SelectList(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'State') {
		return new State(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Textarea') {
		return new Textarea(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Time') {
		return new Time(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Attributes') {
		return new Attributes(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Boolean') {
		return new Bool(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Image') {
		return new Image(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Numeric') {
		return new Numeric(ColumnData, ChangeState);
	} else if (ColumnData.field_type === 'Password') {
		return new Password(ColumnData, ChangeState);		
	} else {
		console.log(ColumnData.field_type)
		console.warn("Field '" + ColumnData.field_type + "' not find! defined for default 'Input'.")
		return new Input(ColumnData, ChangeState);
	}
}