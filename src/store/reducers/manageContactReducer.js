import * as actionTypes from '../actions/actions';

const initialState = {
  contacts: [],
  refreshContacts: false,
  reversedContacts: false,
  contactsCopy: [],
  isSearching: false,
  searchBarValue: ''
}

const reducer = (state = initialState, action) => {
  switch (actionTypes) {
    case actionTypes.SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
        contactsCopy: action.contacts
      };
    case actionTypes.ADD_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
        contactsCopy: action.contacts
      };
    case actionTypes.REMOVE_CONTACTS:
      return {

      };
    default:
      return {
        state
      };
  }
}

export default reducer;