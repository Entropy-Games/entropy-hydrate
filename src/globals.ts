import { IPerfData } from "./types";
import { ElRaw } from "./types";

export const
    EXEC_PREFIX = '$',
    DRY_CONTENT_ATTR = '__hydrate-dry-content',
    DRY_CONTENT_ATTR_COMPONENT = '__hydrate-component-content-dry',
    DRY_CONTENT_FOR_ATTR = '__hydrate-foreach-dry',
    DRY_CONTENT_HIDDEN_ATTR = '__hydrate-hidden-dry',
    POUR_PREFIX = 'data-',
    POUR_PREFIX_DELIMITER = '-',
    FOR_EACH_PREFIX = 'each.',
    FOR_EACH_TAG_NAME_ATTR = 'each',
    EACH_DELIMITER = '.',
    FOR_IN_DELIMITER = ' in ',
    FOR_ATTR = 'foreach',
    BIND_PREFIX = '@',
    BIND_PERSIST_ATTR = '@-persist',
    PUMP_RAW_ATTR = '$-dangerously-set-inner-html',
    PUMP_END_ATTR = '$-end',
    PUMP_START_ATTR = '$-start',
    HIDDEN_ATTR = 'hidden',
    NO_RECURSE_ATTR = 'ignore-contents';

export const components: Record<string, Function> = {};

export let data: Record<string, unknown> = {};
export let lsData: Record<string, unknown> = {};

export let LS_KEY = '__Hydrate_WebAppLSData';
export const setLocalStorageKey = (key: string) => LS_KEY = key;

export const executeError = Symbol('__Hydrate_ExecuteError');

export const BIND_UPDATE_EVENTS = [
    'input', 'change', 'blur', 'keyup', 'keydown', 'keypress',
    'click', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
];

export let loaded = false;
export let loadedCBs: Function[] = [];
export const isLoaded = () => {
    loaded = true;
    loadedCBs.forEach(cb => cb());
}

export let errors: [string, Error][] = [];

export const perf: IPerfData = {
    renders: [],
    execs: []
};

export type Hook = ($el: ElRaw) => void;

export type HookTypes = 'preHydrate' | 'postHydrate';

export const hooks: Record<HookTypes, Hook[]> = {
    'preHydrate': [],
    'postHydrate': []
};

export interface Internals {
    funcs: Record<any, Function>
}

export const internals: Internals = {
    funcs: {}
};