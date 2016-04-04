const PER_PAGE = 5;

export default (state = 0, action = {}) => {
  if(action.type === 'SET_PAGE_SKIP'){
    return action.data.currentPageNumber * PER_PAGE;
  }
  return state;
};