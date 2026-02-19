// Shared state for the questionnaire modal
const showQuestionnaire = ref(false);

export function useQuestionnaire() {
  const openQuestionnaire = () => {
    showQuestionnaire.value = true;
  };

  const closeQuestionnaire = () => {
    showQuestionnaire.value = false;
  };

  return {
    showQuestionnaire,
    openQuestionnaire,
    closeQuestionnaire,
  };
}
