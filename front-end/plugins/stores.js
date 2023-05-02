import { useUserStore } from "~/stores/User";
import { useGeneralStore } from "~/stores/General"
import { useCategoryStore } from "~/stores/Category";
import { useServiceStore } from "~/stores/Service";
import { usePackageStore } from "~/stores/Package";
import { useFeedbackStore } from "~/stores/Feedback";
import { useRequestStore } from "~/stores/Request"

export default defineNuxtPlugin(NuxtApp => {
    return {
        provide: {
            userStore: useUserStore(),
            generalStore: useGeneralStore(),
            categoryStore: useCategoryStore(),
            serviceStore: useServiceStore(),
            packageStore: usePackageStore(),
            feedbackStore: useFeedbackStore(),
            requestStore: useRequestStore(),
        }
    }
});
