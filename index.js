'use strict';

const backgroundColor = '#13111B';
const foregroundColor = '#E1E1E6';
const borderColor = '#41414D';
const cursorColor = '#f8f8f2';
const colors = {
  black: '#000000',
  red: '#E96379',
  green: '#67E480',
  yellow: '#E7dE79',
  blue: '#7159C1',
  magenta: '#ff79c6',
  cyan: '#78D1E1',
  white: '#bfbfbf',
  lightBlack: '#4d4d4d',
  lightRed: '#ff6e67',
  lightGreen: '#5af78e',
  lightYellow: '#f4f99d',
  lightBlue: '#caa9fa',
  lightMagenta: '#ff92d0',
  lightCyan: '#9aedfe',
  lightWhite: '#e6e6e6',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};