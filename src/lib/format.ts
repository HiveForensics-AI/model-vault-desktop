/**
 * Utility functions for formatting numbers and sizes. Extracted into a
 * module to share across components without duplication.
 */
export const format = {
  bytes: (bytes: number): string => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let value = bytes;
    while (value >= 1024 && i < units.length - 1) {
      value /= 1024;
      i++;
    }
    return `${value.toFixed(1)} ${units[i]}`;
  },
};