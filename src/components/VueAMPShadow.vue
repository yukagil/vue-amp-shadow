<template>
  <div id="amp-host-element"></div>
</template>

<script>
export default {
  name: 'vue-amp-shadow',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  mounted() {
    Promise.all([
      this.fetchDocument(),
      this.ampReady(),
    ]).then(([AMPDocument, AMP]) => {
      this.container = document.getElementById('amp-host-element');
      this.attachedDocument = AMP.attachShadowDoc(this.container, AMPDocument, this.src);
    });
  },
  beforeDestroy() {
    this.attachedDocument.close();
  },
  methods: {
    fetchDocument() {
      const xhr = new XMLHttpRequest();
      return new Promise((resolve, reject) => {
        xhr.open('GET', this.src, true);
        xhr.responseType = 'document';
        xhr.setRequestHeader('Accept', 'text/*');
        xhr.onload = () => {
          const isAMP = xhr.responseXML.documentElement.hasAttribute('amp') || xhr.responseXML.documentElement.hasAttribute('⚡');
          if (!xhr.responseXML) {
            reject(new Error('Response does not exist'));
          } else if (!isAMP) {
            reject(new Error('Document is not AMP'));
          }
          resolve(xhr.responseXML);
        };
        xhr.onerror = () => { reject(new Error('Network failure')); };
        xhr.onabort = () => { reject(new Error('Request aborted')); };
        xhr.ontimeout = () => { reject(new Error('Request Timeout')); };
        xhr.send();
      });
    },
    ampReady() {
      return new Promise((resolve) => {
        (window.AMP = window.AMP || []).push(resolve);
      });
    },
  },
};
</script>
