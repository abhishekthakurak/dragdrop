const initialState = {
    plans: [
    {
      title: 'To Do'
    }, 
    {
      title: 'Development'
    },
    {
      title: 'QA'
    }, 
    {
      title: 'Ready For Release'
    },
    {
      title: 'Done'
    }
  ]}
  const planner = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      default:
        return state
    }
  }
  
  export default planner
  