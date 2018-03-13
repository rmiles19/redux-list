import  {combineReducers} from 'redux';
import todos from './todos';
import nextId from '/.nextId';
import currentFilter from './currentFilter';

const rootReducer = combineReducers ({
  todos, 
  nextId,
})

export default rootReducer;