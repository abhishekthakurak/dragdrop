const initialState = {
    plans: [
    {
      title: 'To Do',
      planItems: ['hi']
    }, 
    {
      title: 'Development',
      planItems: []
    },
    {
      title: 'QA',
      planItems: []
    }, 
    {
      title: 'Ready For Release',
      planItems: []
    },
    {
      title: 'Done',
      planItems: []
    }
  ]}
  const planner = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case 'ADD_PLAN': {
        state.plans.push(payload)
        return state
      }
      case 'ADD_TASK':
        if (state.plans[payload.id]){
          state.plans[payload.id].planItems.push(payload.planItem)
        }
        return state
      case 'TASK_EDIT': 
        if (state.plans[payload.planId]) {
          state.plans[payload.planId].planItems[payload.id] = payload.planItem
        }
      default:
        return state
    }
  }
  
  export default planner
  