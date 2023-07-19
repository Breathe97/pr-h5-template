import ContentContainer from '@/components/ContentContainer/ContentContainer.vue'
import TransitionView from '@/components/TransitionView/TransitionView.vue'
import TransitionViewPopup from '@/components/TransitionView/TransitionViewPopup.vue'
import EcharsView from '@/components/echarsView/EcharsView.vue'
import InfoBlock from '@/components/Info/InfoBlock.vue'
import InfoItem from '@/components/Info/InfoItem.vue'
import TabType1 from '@/components/Tab/TabType1.vue'
import TabType2 from '@/components/Tab/TabType2.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ContentContainer: typeof ContentContainer
    TransitionView: typeof TransitionView
    TransitionViewPopup: typeof TransitionViewPopup
    EcharsView: typeof EcharsView
    InfoBlock: typeof InfoBlock
    InfoItem: typeof InfoItem
    TabType1: typeof TabType1
    TabType2: typeof TabType2
  }
}
