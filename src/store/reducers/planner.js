const initialState = {
    plans: [
    {
      title: 'To Do',
      planItems: ['Rent Pay']
    }, 
    {
      title: 'Development',
      planItems: ['Agreement']
    },
    {
      title: 'QA',
      planItems: ['Rent Pay Landing']
    }, 
    {
      title: 'Ready For Release',
      planItems: ['Rent Pay Home']
    },
    {
      title: 'Done',
      planItems: ['Rent Pay Hooks']
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

      case 'MOVE_TASK_ACROSS_PLAN':
        let {planId, newPlanId, taskId} = payload
        const movedTask = state.plans[planId].planItems.splice(taskId, 1)
        state.plans[newPlanId].planItems.push(movedTask)
        return state
      
      case 'MOVE_TASK_WITHIN_PLAN':
        let {newTaskId, currentPlanId, prevTaskId} = payload
        let swapper = state.plans[currentPlanId].planItems[newTaskId]
        state.plans[currentPlanId].planItems[newTaskId] = state.plans[currentPlanId].planItems[prevTaskId]
        state.plans[currentPlanId].planItems[prevTaskId] = swapper
        return state
      default:
        return state
    }
  }
  
  export default planner
  