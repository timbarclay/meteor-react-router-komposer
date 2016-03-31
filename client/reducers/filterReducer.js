export default (state = null, action) => {
  if(action.type === 'SET_FILTER'){
    return action.filter;
  }
  return state;
}