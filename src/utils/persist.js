import { onSnapshot, applySnapshot } from 'mobx-state-tree';

/**
 * Persisting data
 * @param {string} name
 * @param {object} store
 * @param {object} options
 * @returns {Promise<null|*>}
 */
const persist = async (name, store, options = {}) => {
  const { storage, jsonify } = options;

  onSnapshot(store, async _snapshot => {
    const snapshot = { ..._snapshot };
    const data = !jsonify ? snapshot : JSON.stringify(snapshot);
    await storage.setItem(name, data);
  });

  const data = await storage.getItem(name);
  if (data) {
    const snapshot = !jsonify ? data : JSON.parse(data);
    applySnapshot(store, snapshot);
    return data;
  }
  return null;
};

export default persist;
