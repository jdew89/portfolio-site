export const state = () => ({
    showAnimations: true
});

export const mutations = {
    toggleAnimations(state){
        console.log("COMMIT");
        state.showAnimations = !state.showAnimations;
    }
};