<template>
  <section :id="id" class="code-box">
    <section class="code-box-demo">
      <slot />
    </section>
    <section class="code-box-meta markdown">
      <div class="code-box-title">
        {{ title }}
      </div>
      <div class="code-box-description" v-html="docHtml"></div>
      <div class="code-box-actions">
        <a-tooltip :title="type === 'TS' ? 'Switch to JavaScript' : 'Switch to TypeScript'">
          <span
            class="code-expand-icon code-box-code-action"
            style="width: auto"
            @click="handleChangeType"
          >
            {{ type }}
          </span>
        </a-tooltip>
        <a-tooltip
          v-if="!blocked"
          :visible="copyTooltipVisible"
          :title="t('app.demo.copy')"
          @visibleChange="onCopyTooltipVisibleChange"
        >
          <component
            :is="copied && copyTooltipVisible ? 'CheckOutlined' : 'SnippetsOutlined'"
            key="copy"
            v-clipboard:copy="type === 'TS' ? sourceCode : jsSourceCode"
            v-clipboard:success="handleCodeCopied"
            class="code-box-code-copy code-box-code-action"
          />
        </a-tooltip>
        <a-tooltip v-else :title="t('app.demo.copy')">
          <SnippetsOutlined class="code-box-code-copy code-box-code-action" />
        </a-tooltip>
        <a-tooltip :title="codeExpand ? 'Hide code' : 'Show code'">
          <span class="code-expand-icon code-box-code-action">
            <img
              alt="expand code"
              :src="
                theme === 'dark'
                  ? 'https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg'
                  : 'https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg'
              "
              :class="codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'"
              @click="handleCodeExpand"
            />
            <img
              alt="expand code"
              :src="
                theme === 'dark'
                  ? 'https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg'
                  : 'https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg'
              "
              :class="codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'"
              @click="handleCodeExpand"
            />
          </span>
        </a-tooltip>
      </div>
    </section>

    <section :class="highlightClass">
      <div class="highlight">
        <slot v-if="type === 'TS'" name="htmlCode" />
        <slot v-else name="jsVersionHtml" />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';
import { CheckOutlined, SnippetsOutlined } from '@ant-design/icons-vue';
import { Tooltip } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { useInjectGlobalConfig } from '../context';
export default defineComponent({
  name: 'DemoBox',
  components: {
    CheckOutlined,
    SnippetsOutlined,
    ATooltip: Tooltip,
  },
  props: {
    jsfiddle: Object,
  },
  setup(props) {
    const codeExpand = ref(false);
    const type = ref('TS');
    const copyTooltipVisible = ref(false);
    const copied = ref(false);
    const { t } = useI18n();
    const globalConfig = useInjectGlobalConfig();
    const title = computed(
      () =>
        props.jsfiddle &&
        props.jsfiddle.title &&
        props.jsfiddle?.title[globalConfig.isZhCN.value ? 'zh-CN' : 'en-US'],
    );

    const id = computed(() => {
      const path =
        (props.jsfiddle && props.jsfiddle.relativePath && props.jsfiddle?.relativePath) || '';
      return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    });

    const onCopyTooltipVisibleChange = (visible: boolean) => {
      if (visible) {
        copyTooltipVisible.value = visible;
        copied.value = false;
      } else {
        copyTooltipVisible.value = visible;
      }
    };
    const docHtml = computed(() =>
      props.jsfiddle && props.jsfiddle.docHtml
        ? (
            props.jsfiddle.docHtml
              .replace('<h2 id="zh-cn">zh-CN</h2>', '')
              .split('<h2 id="en-us">en-US</h2>')[globalConfig.isZhCN.value ? 0 : 1] || ''
          ).trim()
        : '',
    );
    const handleCodeExpand = () => {
      if (globalConfig.blocked.value) {
        return;
      }
      codeExpand.value = !codeExpand.value;
    };
    const handleCodeCopied = () => {
      copied.value = true;
    };
    const handleChangeType = () => {
      if (globalConfig.blocked.value) {
        return;
      }
      type.value = type.value === 'TS' ? 'JS' : 'TS';
    };
    const highlightClass = computed(() => {
      return {
        'highlight-wrapper': true,
        'highlight-wrapper-expand': codeExpand.value,
      };
    });

    const theme = computed(() => inject('themeMode', { theme: ref('default') }).theme.value);
    return {
      t,
      id,
      docHtml,
      theme,
      type,
      blocked: globalConfig.blocked,
      isZhCN: globalConfig.isZhCN,
      title,
      codeExpand,
      copyTooltipVisible,
      copied,
      onCopyTooltipVisibleChange,
      handleCodeExpand,
      handleCodeCopied,
      handleChangeType,
      highlightClass,
      sourceCode: decodeURIComponent(escape(window.atob(props.jsfiddle?.sourceCode))),
      jsSourceCode: decodeURIComponent(escape(window.atob(props.jsfiddle?.jsSourceCode))),
    };
  },
});
</script>

<style></style>
