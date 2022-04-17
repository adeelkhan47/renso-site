<template>
  <a-button-group>
    <a-button
      size="small"
      v-for="lang in langs"
      :key="lang.value"
      :type="selectedLang == lang.value ? 'primary' : 'default'"
      @click="() => setLang(lang.value)"
    >
      {{ lang.label }}
    </a-button>
  </a-button-group>
</template>

<script>
import { getIt, saveIt } from "../utils/localStorage.util";

const LANG_KEY = "pageLang";

export default {
  name: "LanguageSwitch",

  data() {
    return {
      selectedLang: "de",
      langs: [
        {
          label: "En",
          value: "en"
        },
        {
          label: "De",
          value: "de"
        }
      ]
    };
  },

  created() {
    const lang = getIt(LANG_KEY);
    if (lang) this.setLang(lang);
  },

  methods: {
    setLang(lang) {
      this.selectedLang = lang;
      this.$i18n.locale = lang;
      saveIt(LANG_KEY, lang);
    }
  }
};
</script>
