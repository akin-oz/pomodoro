import Vue from "vue";

import "./styles/quasar.scss";
import lang from "quasar/lang/en-us.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import {
  Quasar,
  QCard,
  QCardActions,
  QCardSection,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QInput,
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QCard,
    QCardActions,
    QCardSection,
    QLayout,
    QHeader,
    QDrawer,
    QFooter,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QInput,
  },
  directives: {},
  plugins: {},
  lang: lang
});
