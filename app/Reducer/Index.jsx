const reducer1=(state={},action)=>{
	switch (action.type){
		case 'None':
		return Object.assign({},state,action.obj);
		default:
		return state;
	}
}
const reducer2=(state=[],action)=>{
	switch(action.type){
		case 'Two':
		return action.two;
		default:
		return state;
	}
}
export default {reducer2,reducer1}