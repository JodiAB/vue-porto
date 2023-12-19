import { createStore } from 'vuex'

export default createStore({
  state: {
    sections:[],
    Home: ''
  },
  getters: {
    getSectionByName: (state) => (sectionName) => {
      return state.sections.find((section) => Object.keys(section)[0] === sectionName);
    }
  },
  mutations: {
    setSections(state,data){
      state.Home = data
    }
  },
  actions: {
    fetchSections(context){
      fetch('  http://localhost:3000/data')
      .then(res => res.json())
      .then(data => {
        //  console.log(data);
        context.commit('setSections',data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  },
  modules: {
  }
})
