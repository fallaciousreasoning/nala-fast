import '@brave/leo/tokens/css/variables.css';
import { fastButton, provideFASTDesignSystem } from "@microsoft/fast-components";
import { css } from '@microsoft/fast-element';

const buttonStyles = () => css`
  :host {
    display: inline-block;
    flex-grow: 1;
  }
  :host button {
    width: 100%;
    height: 100%;
  }
  :host {
    /**
      * These are not literally the foreground/background of the button, but
      * rather the base colors, which will be remixed to make generate the
      * button color palette. */
    --foreground: var(--leo-color-text-primary);
    --background: var(--leo-color-container-background);
    --primary-color: var(--leo-button-color, var(--leo-color-button-background));
    --mixed-primary-color: var(--primary-color);
    --default-transition: box-shadow 0.12s ease-in-out, color 0.12s ease-in-out, border-color 0.12s ease-in-out, opacity 0.12s ease-in-out;
    --box-shadow-hover: var(--leo-effect-elevation-02);
    --box-shadow-focus: var(--leo-effect-focus-state);
    --radius: 0;
    --border-color: transparent;
    --border-width: 0px;
    --leo-icon-color: var(--icon-color);
    --leo-progressring-size: var(--leo-icon-size);
    --leo-progressring-color: var(--icon-color);
  }
  .control, .control:visited:not(:hover) {
    display: flex;
    gap: var(--icon-gap);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.12s ease-in-out, var(--default-transition);
    box-shadow: none;
    border: solid var(--border-width, 0px) var(--border-color, transparent);
    border-radius: var(--leo-button-radius, var(--radius));
    background: var(--bg);
    color: var(--color);
    text-decoration: none;
    padding: var(--leo-button-padding, var(--padding-y) var(--padding-x));
    max-height: max-content;
  }
  .control.fab, .control:visited:not(:hover).fab {
    max-width: max-content;
  }
  .control:not(:disabled):hover, .control:not(:disabled) [data-is-button-target]:hover :host .control, .control:not(:disabled) [data-is-button-target]:hover .control {
    --leo-icon-color: var(--icon-hover-color, var(--icon-color));
    --mixed-primary-color: var(--leo-color-primitive-primary-70);
  /** If we support the color-mix syntax, infer the hover color */
    background: var(--bg-hover, var(--bg));
    color: var(--color-hover, var(--color));
    box-shadow: var(--box-shadow-hover);
    border-color: var(--border-color-hover, var(--border-color));
  }
  @supports (color: color-mix(in srgb, transparent, transparent)) {
    --mixed-primary-color: color-mix(in srgb, var(--primary-color), var(--foreground) 20%);
  }
  .control:not(:disabled):active {
    opacity: 0.75;
    background: var(--bg-active, var(--bg));
    color: var(--color-active, var(--color-hover, var(--color)));
  }

  .control:not(:disabled):focus-visible {
    outline: none;
    color: var(--color-focus, var(--color));
    box-shadow: var(--box-shadow-focus);
    background: var(--bg-focus, var(--bg));
    border-color: var(--border-color-focus, var(--border-color));
  }
  :host([loading]) .control {
    opacity: 0.75;
    background: var(--bg-loading, var(--bg));
    color: var(--color-loading, var(--color));
  }
  :host:disabled .control, .control:disabled {
    cursor: auto;
  }
  :host:disabled:not([loading]), :host(:not([loading])) .control:disabled {
    --icon-color: var(--leo-color-icon-disabled);
    background: var(--bg-disabled, var(--bg));
    color: var(--leo-color-text-disabled);
    border-color: var(--leo-color-button-disabled);
  }
  :host([size=tiny]) {
    font: var(--leo-font-components-button-small);
    --padding-y: 6px;
    --padding-x: var(--leo-spacing-m);
    --radius: 14px;
    --leo-icon-size: 16px;
    --icon-gap: 8px;
  }
  :host([size=tiny][fab]) {
    --padding-x: 6px;
  }

  :host([size=small]) {
    font: var(--leo-font-components-button-small);
    --padding-y: 8px;
    --padding-x: 14px;
    --radius: 18px;
    --leo-icon-size: 18px;
    --icon-gap: 8px;
  }

  :host([size=small][fab]) {
    --padding-x: 8px;
  }

  :host(:not([size])), :host([size=medium]) {
    font: var(--leo-font-components-button-default);
    --padding-y: 10px;
    --padding-x: 16px;
    --radius: 22px;
    --leo-icon-size: 20px;
    --icon-gap: 8px;
  }

  :host([size=medium][fab]), :host(:not([size])[fab]) {
    --padding-x: 12px;
    --padding-y: 12px;
  }

  :host([size=large]) {
    font: var(--leo-font-components-button-large);
    --padding-y: 15px;
    --padding-x: 30px;
    --radius: 26px;
    --leo-icon-size: 20px;
    --icon-gap: 10px;
  }
  
  :host([size=large][fab]) {
    --padding-x: 15px;
    --padding-y: 15px;
  }

  :host([size=jumbo])  {
    font: var(--leo-font-components-button-jumbo);
    --padding-y: 18px;
    --padding-x: 26px;
    --radius: 30px;
    --leo-icon-size: 24px;
    --icon-gap: 12px;
  }
  :host([size=jumbo][fab]) {
    --padding-x: 18px;
  }
  :host([appearance=neutral]), :host([appearance=filled]) {
    --bg: var(--mixed-primary-color);
    --bg-disabled: var(--leo-color-button-disabled);
    --color: var(--leo-color-white);
    --icon-color: var(--color);
  }
  
  :host([appearance=outline]){
    --bg: transparent;
    --bg-active: --leo-color-gray-20;
    --primary-color: var(--leo-button-color, var(--leo-color-primitive-primary-60));
    --color: var(--mixed-primary-color);
    --border-width: 1px;
    --border-color: var(--leo-color-divider-interactive);
    --border-color-hover: var(--leo-color-primitive-primary-40);
    --border-color-focus: var(--leo-color-divider-interactive);
  /** If we support color mix, infer border colors from primary color */
    --box-shadow-focus: 0px 0px 0px 2px #423eee, 0px 0px 0px 1px rgba(255, 255, 255, 0.3);
    --icon-color: var(--color);
  }
  @theme (dark) {
    --primary-color: var(--leo-button-color, var(--leo-color-primitive-primary-40));
    --border-color-hover: var(--leo-color-primitive-primary-60);
  }
  @supports (color: color-mix(in srgb, transparent, transparent)) {
    --border-color: color-mix(in srgb, var(--primary-color), var(--background) 50%);
    --border-color-hover: var(--primary-color);
  }
  
  :host([appearance=plain]) {
    --radius: 8px;
    --padding-x: 2px;
    --primary-color: var(--leo-button-color, var(--leo-color-primitive-primary-60));
    --color: var(--mixed-primary-color);
    --box-shadow-hover: none;
  }
  @theme (dark) {
    --primary-color: var(--leo-button-color, var(--leo-color-primitive-primary-40));
  }
  :host([appearance=plain]):disabled:not([loading]) {
    --color: var(--leo-color-text-primary);
  }
  :host([appearance=plain][fab]) {
    --padding-y: 0;
    --padding-x: 0;
  }

  :host([appearance=plain-faint]) {
    --radius: 8px;
    --padding-x: 2px;
    --foreground: transparent;
    --primary-color: currentColor;
    --color: var(--mixed-primary-color);
    --box-shadow-hover: none;
    --icon-color: var(--mixed-primary-color);
  }
  @supports (color: color-mix(in srgb, transparent, transparent)) {
    --icon-color: color-mix(in srgb, var(--primary-color), var(--background) 30%);
  }
  :host([appearance=plain-faint][fab]) {
    --padding-y: 0;
    --padding-x: 0;
  }

  :host([appearance=hero]) {
    transition: var(--default-transition);
    --bg: transparent;
    --bg-focus: var(--bg);
    --bg-disabled: var(--leo-color-button-disabled);
    --color: var(--leo-color-white);
    --default-bg-opacity: 1;
    position: relative;
    z-index: 0;
  }

  :host([appearance=hero]:not(:disabled):not([loading])) .control::before, :host([appearance=hero]:not(:disabled):not([loading])) .control::after {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--leo-button-radius, var(--radius));
  }
  :host([appearance=hero]:not(:disabled):not([loading])) .control::before {
    transition: var(--default-transition);
    z-index: -1;
    background: var(--leo-gradient-hero);
    opacity: var(--default-bg-opacity);
  }
  :host([appearance=hero]:not(:disabled):not([loading])) .control::after {
    z-index: -2;
    background: linear-gradient(101.5deg, #770eaa 21.56%, #b72070 74.97%, #e6461e 104.58%);
  }
  :host([appearance=hero]:not(:disabled):not([loading])) .control:hover {
    --default-bg-opacity: 0;
  }

  :host([fab]) {
    --radius: 10000px;
    aspect-ratio: 1;
  }
`;

provideFASTDesignSystem()
  .withPrefix('nl')
  .register(fastButton({
    styles: buttonStyles,
  }))
