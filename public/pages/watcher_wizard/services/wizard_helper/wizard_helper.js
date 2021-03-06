import { get } from 'lodash';

class WizardHelper {
  constructor() {}

  isScheduleModeEvery(scheduleString) {
    return !!scheduleString.match(/every\s(\d+)\s(seconds|minutes|hours|days|months|years)/);
  }

  isSpyWatcher(watcher) {
    return get(watcher, 'spy') || watcher.spy;
  }

  isWizardWatcher(watcher) {
    return get(watcher, 'wizard.chart_query_params');
  }

  getUniqueTagId(name, uuid) {
    return name + '_' + uuid.replace(/-/g, '');
  }
}

export default WizardHelper;
