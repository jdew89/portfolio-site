export const state = () => ({
    showAnimations: true
});

export const mutations = {
    toggleAnimations(state){
        state.showAnimations = !state.showAnimations;
    }
};