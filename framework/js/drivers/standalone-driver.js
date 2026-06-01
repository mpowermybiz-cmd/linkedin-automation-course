/**
 * @file standalone-driver.js
 * @description Standalone driver for direct static hosting (no LMS required).
 * Uses localStorage for lightweight progress persistence across page reloads.
 * Designed for courses hosted on Netlify, Vercel, or any static file host.
 */

const STORAGE_KEY = 'coursecode_standalone_state';

export class StandaloneDriver {
    constructor() {
        this._connected = false;
        this._terminated = false;
        this._state = this._loadState();
    }

    _loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    }

    _saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
        } catch {
            // localStorage unavailable — silent fail (private browsing, etc.)
        }
    }

    // ── Lifecycle ──────────────────────────────────────────────────────────

    async initialize() {
        this._connected = true;
        this._terminated = false;
        return true;
    }

    async terminate() {
        this._saveState();
        this._connected = false;
        this._terminated = true;
        return true;
    }

    async commit() {
        this._saveState();
        return true;
    }

    getCapabilities() {
        return {
            supportsObjectives: false,
            supportsInteractions: false,
            supportsComments: false,
            supportsEmergencySave: false,
            maxSuspendDataBytes: 0,
            asyncCommit: false,
        };
    }

    getFormat() {
        return 'standalone';
    }

    isConnected() {
        return this._connected;
    }

    isTerminated() {
        return this._terminated;
    }

    // ── State persistence ──────────────────────────────────────────────────

    getSuspendData() {
        return this._state.suspendData || null;
    }

    setSuspendData(data) {
        this._state.suspendData = data;
        this._saveState();
        return true;
    }

    // ── Semantic reads ─────────────────────────────────────────────────────

    getEntryMode() {
        return this._state.bookmark ? 'resume' : 'ab-initio';
    }

    getBookmark() {
        return this._state.bookmark || '';
    }

    getCompletion() {
        return this._state.completion || 'incomplete';
    }

    getSuccess() {
        return this._state.success || 'unknown';
    }

    getScore() {
        return this._state.score || null;
    }

    getLearnerInfo() {
        return { id: 'standalone-learner', name: 'Learner' };
    }

    // ── Semantic writes ────────────────────────────────────────────────────

    setBookmark(location) {
        this._state.bookmark = location;
        this._saveState();
    }

    reportScore(score) {
        this._state.score = score;
        this._saveState();
    }

    reportCompletion(status) {
        this._state.completion = status;
        this._saveState();
    }

    reportSuccess(status) {
        this._state.success = status;
        this._saveState();
    }

    reportProgress(/* ratio */) {
        // No-op for standalone — no LRS to report to
    }

    reportSessionTime(/* duration */) {
        // No-op for standalone
    }

    reportObjective(/* objective */) {
        // No-op for standalone
    }

    reportInteraction(/* interaction */) {
        // No-op for standalone
    }

    setExitMode(/* mode */) {
        // No-op for standalone
    }
}
